/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project`.
 */
import {
    AfterViewChecked,
    Component,
    ContentChildren, ElementRef,
    EventEmitter,
    HostBinding,
    HostListener, Injector,
    Input,
    Output,
    QueryList, Renderer2, TemplateRef, ViewChild, ViewContainerRef
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {Expand} from "../../utils/expand/providers/expand";
import {LoadingListener} from "../../utils/loading/loading-listener";

import {ClrDatagridCell} from "./datagrid-cell";
import {DatagridHideableColumnModel} from "./datagrid-hideable-column.model";
import {ExpandableRowsCount} from "./providers/global-expandable-rows";
import {HideableColumnService} from "./providers/hideable-column.service";
import {RowActionService} from "./providers/row-action-service";
import {Selection, SelectionType} from "./providers/selection";
import {DisplayModeService} from "./providers/display-mode.service";
import {DatagridDisplayMode} from "./interfaces/display-mode.interface";
import {HostWrapper} from "../../utils/host-wrapping";
import {ClrWrappedRow} from "./wrapped-row";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/combineLatest";
import {combineLatest} from "rxjs/observable/combineLatest";


let nbRow: number = 0;

@Component({
    selector: "clr-dg-row",
    templateUrl: "./datagrid-row.html",
    host: {
        "[class.datagrid-row]": "true",
        "[class.datagrid-selected]": "selected",
        "[attr.tabindex]": "selection.rowSelectionMode ? 0 : null"
    },
    providers: [Expand, {provide: LoadingListener, useExisting: Expand}]
})
export class ClrDatagridRow {
    public id: string;

    /* reference to the enum so that template can access */
    public SELECTION_TYPE = SelectionType;

    private readonly ENTER_KEY_CODE = 13;
    private readonly SPACE_KEY_CODE = 32;

    /**
     * Model of the row, to use for selection
     */
    @Input("clrDgItem") item: any;

    @HostBinding("attr.role") role: string;

    private combinedLatestExpand: Observable<any>;
    private latestExpandSubsc;
    private latestExpandSubscribe: Subscription;
    ribe: Subscription;

    constructor(public selection: Selection, public rowActionService: RowActionService,
                public globalExpandable: ExpandableRowsCount, public expand: Expand,
                public hideableColumnService: HideableColumnService,
                private displayMode: DisplayModeService, private vcr: ViewContainerRef,
                private renderer: Renderer2, private el: ElementRef) {
        this.id = "clr-dg-row" + (nbRow++);
        this.role = selection.rowSelectionMode ? "button" : null;

        this.combinedLatestExpand = combineLatest(
            this.expand.replace,
            this.expand.expandChange
        );

        // TODO Unsubscribe OnDestroy
        this.latestExpandSubscribe = this.combinedLatestExpand.subscribe(latestValues => {
            const [expandReplaceValue, expandChangeValue] = latestValues;

            if (expandReplaceValue && expandChangeValue) { // replaced and expanding
                this.renderer.addClass(this.el.nativeElement, "datagrid-row-replaced");
            } else if (!expandReplaceValue && !expandChangeValue) { // not replaced and collapsing
                this.renderer.removeClass(this.el.nativeElement, "datagrid-row-replaced");
            } else if (expandReplaceValue && !expandChangeValue) { // replaced and collapsing
                this.renderer.removeClass(this.el.nativeElement, "datagrid-row-replaced");
            } else if (!expandReplaceValue && expandChangeValue) { // not replaced and expanding
                this.renderer.removeClass(this.el.nativeElement, "datagrid-row-replaced");
            }
        });
    }

    private _selected = false;
    /**
     * Indicates if the row is selected
     */
    public get selected() {
        if (this.selection.selectionType === SelectionType.None) {
            return this._selected;
        } else {
            return this.selection.isSelected(this.item);
        }
    }

    @Input("clrDgSelected")
    public set selected(value: boolean) {
        if (this.selection.selectionType === SelectionType.None) {
            this._selected = value;
        } else {
            this.selection.setSelected(this.item, value);
        }
    }

    @Output("clrDgSelectedChange") selectedChanged = new EventEmitter<boolean>(false);

    public toggle(selected = !this.selected) {
        if (selected !== this.selected) {
            this.selected = selected;
            this.selectedChanged.emit(selected);
        }
    }

    public get expanded() {
        return this.expand.expanded;
    }

    @Input("clrDgExpanded")
    public set expanded(value: boolean) {
        this.expand.expanded = value;
    }

    @Output("clrDgExpandedChange") expandedChange = new EventEmitter<boolean>(false);

    public toggleExpand() {
        if (this.expand.expandable) {
            this.expanded = !this.expanded;
            this.expandedChange.emit(this.expanded);
        }
    }

    @HostListener("click")
    public toggleSelection() {
        if (!this.selection.rowSelectionMode) {
            return;
        }

        switch (this.selection.selectionType) {
            case SelectionType.None:
                break;
            case SelectionType.Single:
                this.selection.currentSingle = this.item;
                break;
            case SelectionType.Multi:
                this.toggle();
                break;
            default:
                break;
        }
    }

    @HostListener("keypress", ["$event"])
    public keypress(event: KeyboardEvent) {
        if (!this.selection.rowSelectionMode) {
            return;
        }

        // Check to see if space or enter were pressed
        if (event.keyCode === this.ENTER_KEY_CODE || event.keyCode === this.SPACE_KEY_CODE) {
            // Prevent the default action to stop scrolling when space is pressed
            event.preventDefault();
            this.toggleSelection();
        }
    }

    private subscription: Subscription;

    /*****
     * property dgCells
     *
     * @description
     * A Query List of the ClrDatagrid cells in this row.
     *
     */
    @ContentChildren(ClrDatagridCell) dgCells: QueryList<ClrDatagridCell>;

    ngAfterContentInit() {
        // Make sure things get started
        const columnsList = this.hideableColumnService.getColumns();
        this.updateCellsForColumns(columnsList);

        // Triggered when the Cells list changes per row-renderer
        this.dgCells.changes.subscribe((cellList) => {
            const columnList = this.hideableColumnService.getColumns();
            if (cellList.length === columnList.length) {
                this.updateCellsForColumns(columnList);
            }

        });

        // Used to set things up the first time but only after all the columns are ready.
        this.subscription = this.hideableColumnService.columnListChange.subscribe((columnList) => {
            // Prevents cell updates when cols and cells array are not aligned - only seems to run on init / first time.
            if (columnList.length === this.dgCells.length) {
                this.updateCellsForColumns(columnList);
            }
        });

        this.dgCells.filter((cell, index) => index > 0)
            .forEach((cell) => this.scrollableCells.insert(cell.view));
        // console.log("scrollable container: ", this.scrollableCells);
        // this.dgCells.forEach(cell => {
        //     console.log(cell.view);
        //     this.scrollableContainer.insert(cell.view);
        // });
        // Note to self - what I prolly want to do here is to subscribe to the QueryList and
        // iterate over each list to check the cell and see if its pinned or scrollable
        // then insert it into the correct container at the end of the list.
    }

    ngAfterViewInit() {
        // TODO Unsubscribe OnDestroy
        // Subscription to displayType mode: so we know when to move cells around for smart sizing and other displayType states
        this.displayMode.view.subscribe(viewChange => {
            while (this.scrollableCells.detach()) {} // remove cells containers
            while (this.calculatedCells.detach()) {} // remove cells containers
            if (viewChange === DatagridDisplayMode.CALCULATE) {
                this.dgCells.forEach(cell => {
                    this.calculatedCells.insert(cell.view);
                });
                this.displayCells = false;
            } else {
                this.dgCells.forEach(cell => {
                    this.scrollableCells.insert(cell.view);
                });
                this.displayCells = true;
            }
        });
        // Insert views the first time? Fixed the pagination issue after discussing w/ Eude.
        this.dgCells.forEach(cell => {
            this.scrollableCells.insert(cell.view);
        });
        this.displayCells = true;
    }

    /**********
     *
     * @description
     * 1. Maps the new columnListChange to the dgCells list by index
     * 2. Sets the hidden state on the cell
     * Take a Column list and use index to access the columns for hideable properties.
     *
     */
    public updateCellsForColumns(columnList: DatagridHideableColumnModel[]) {
        // Map cells to columns with Array.index
        this.dgCells.forEach((cell, index) => {
            const currentColumn = columnList[index];  // Accounts for null space.
            if (currentColumn) {
                cell.id = currentColumn.id;
            }
        });
    }

    ngOnDestroy() {
        if (this.subscription) { // fixes pagination-scrolling.html demo error
            this.subscription.unsubscribe();
        }
    }

    public displayCells = false;
    @ViewChild("stickyCells", {read: ViewContainerRef}) stickyCells: ViewContainerRef;
    @ViewChild("scrollableCells", {read: ViewContainerRef}) scrollableCells: ViewContainerRef;
    @ViewChild("calculatedCells", {read: ViewContainerRef}) calculatedCells: ViewContainerRef;

    private wrappedInjector: Injector;

    ngOnInit() {
        this.wrappedInjector = new HostWrapper(ClrWrappedRow, this.vcr);
    }

    public get view() {
        return this.wrappedInjector.get(ClrWrappedRow, this.vcr).rowView;
    }
}
