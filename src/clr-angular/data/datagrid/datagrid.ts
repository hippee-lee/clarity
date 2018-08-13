/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChild,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    QueryList,
    Renderer2,
    ViewChild,
    ViewContainerRef
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {ClrDatagridColumn} from "./datagrid-column";
import {ClrDatagridItems, RowContext} from "./datagrid-items";
import {ClrDatagridPlaceholder} from "./datagrid-placeholder";
import {ClrDatagridRow} from "./datagrid-row";
import {DatagridDisplayMode} from "./enums/display-mode.enum";
import {ClrDatagridStateInterface} from "./interfaces/state.interface";
import {ColumnToggleButtonsService} from "./providers/column-toggle-buttons.service";
import {DisplayModeService} from "./providers/display-mode.service";
import {FiltersProvider} from "./providers/filters";
import {ExpandableRowsCount} from "./providers/global-expandable-rows";
import {HideableColumnService} from "./providers/hideable-column.service";
import {Items} from "./providers/items";
import {Page} from "./providers/page";
import {RowActionService} from "./providers/row-action-service";
import {Selection, SelectionType} from "./providers/selection";
import {Sort} from "./providers/sort";
import {StateDebouncer} from "./providers/state-debouncer.provider";
import {StateProvider} from "./providers/state.provider";
import {TableSizeService} from "./providers/table-size.service";
import {DatagridRenderOrganizer} from "./render/render-organizer";

@Component({
    selector: "clr-datagrid",
    templateUrl: "./datagrid.html",
    providers: [
        Selection,
        Sort,
        FiltersProvider,
        Page,
        Items,
        DatagridRenderOrganizer,
        RowActionService,
        ExpandableRowsCount,
        HideableColumnService,
        StateDebouncer,
        StateProvider,
        ColumnToggleButtonsService,
        TableSizeService,
        DisplayModeService,
    ],
    host: {"[class.datagrid-host]": "true"}
})
export class ClrDatagrid implements AfterContentInit, AfterViewInit, OnDestroy {
    constructor(private columnService: HideableColumnService, private organizer: DatagridRenderOrganizer,
                public items: Items, public expandableRows: ExpandableRowsCount, public selection: Selection,
                public rowActionService: RowActionService, private stateProvider: StateProvider,
                public displayMode: DisplayModeService, private renderer: Renderer2, private el: ElementRef) {}

    /* reference to the enum so that template can access */
    public SELECTION_TYPE = SelectionType;

    /**
     * Freezes the datagrid while data is loading
     */
    public get loading(): boolean {
        return this.items.loading;
    }

    @Input("clrDgLoading")
    public set loading(value: boolean) {
        this.items.loading = value;
    }

    /**
     * Output emitted whenever the data needs to be refreshed, based on user action or external ones
     */
    @Output("clrDgRefresh") public refresh = new EventEmitter<ClrDatagridStateInterface>(false);

    /**
     * Public method to re-trigger the computation of displayed items manually
     */
    public dataChanged() {
        this.items.refresh();
    }

    /**
     * We grab the smart iterator from projected content
     */
    // TODO - Add correct type - rebase with: https://github.com/vmware/clarity/pull/2347
    @ContentChild(ClrDatagridItems) public iterator: ClrDatagridItems<RowContext<any>>;

    /**
     * Set the state of the pinned first column
     * default is false.
     */

    public _pinnedColumn: boolean = false;
    @Input("clrDgPinnedColumn")
    set pinned(value: boolean) {
        // Does this wording set us up to take a list of column's to be pinned later on?
        this._pinnedColumn = value;
        this.pinnedColumnChange.emit(value);
    }

    /**
     * @description
     *
     * Listen to changes to the pinned first column state.
     * EventEmitter<boolean>
     */
    @Output("clrDgPinnedColumnChange")
    pinnedColumnChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    /**
     * Array of all selected items
     */
    @Input("clrDgSelected")
    set selected(value: any[]) {
        if (value) {
            this.selection.selectionType = SelectionType.Multi;
        } else {
            this.selection.selectionType = SelectionType.None;
        }
        this.selection.current = value;
    }

    @Output("clrDgSelectedChange") selectedChanged = new EventEmitter<any[]>(false);

    /**
     * Selected item in single-select mode
     */
    @Input("clrDgSingleSelected")
    set singleSelected(value: any) {
        this.selection.selectionType = SelectionType.Single;
        if (value) {
            this.selection.currentSingle = value;
        } else {
            this.selection.currentSingle = null;
        }
    }

    @Output("clrDgSingleSelectedChange") singleSelectedChanged = new EventEmitter<any>(false);

    /**
     * Selection/Deselection on row click mode
     */
    @Input("clDgRowSelection")
    set rowSelectionMode(value: boolean) {
        this.selection.rowSelectionMode = value;
    }

    /**
     * Indicates if all currently displayed items are selected
     */
    public get allSelected() {
        return this.selection.isAllSelected();
    }

    /**
     * Selects/deselects all currently displayed items
     * @param value
     */
    public set allSelected(value: boolean) {
        /*
         * This is a setter but we ignore the value.
         * It's strange, but it lets us have an indeterminate state where only
         * some of the items are selected.
         */
        this.selection.toggleAll();
    }

    /**
     * Custom placeholder detection
     */
    @ContentChild(ClrDatagridPlaceholder) public placeholder: ClrDatagridPlaceholder;

    /**
     * Hideable Column data source / detection.
     */
    @ContentChildren(ClrDatagridColumn) public columns: QueryList<ClrDatagridColumn>;

    /**
     * When the datagrid is user-managed without the smart iterator, we get the items displayed
     * by querying the projected content. This is needed to keep track of the models currently
     * displayed, typically for selection.
     */

    @ContentChildren(ClrDatagridRow) rows: QueryList<ClrDatagridRow>;
    @ViewChild("scrollableColumns", {read: ViewContainerRef}) scrollableColumns: ViewContainerRef;

    ngAfterContentInit() {
        if (!this.items.smart) {
            this.items.all = this.rows.map((row: ClrDatagridRow) => row.item);
        }

        this.rows.forEach(row => {
            this.displayedRows.insert(row.view);
        });

        this._subscriptions.push(this.rows.changes.subscribe(() => {
            if (!this.items.smart) {
                this.items.all = this.rows.map((row: ClrDatagridRow) => row.item);
            }
            this.rows.forEach(row => {
                this.displayedRows.insert(row.view);
            });
        }));

        this._subscriptions.push(this.columns.changes.subscribe((columns: ClrDatagridColumn[]) => {
            this.columnService.updateColumnList(this.columns.map(col => col.hideable));
        }));

        // Get ColumnService ready for HideableColumns.
        this.columnService.updateColumnList(this.columns.map(col => col.hideable));
    }

    /**
     * Our setup happens in the view of some of our components, so we wait for it to be done before starting
     */
    ngAfterViewInit() {
        // TODO: determine if we can get rid of provider wiring in view init so that subscriptions can be done earlier
        this.refresh.emit(this.stateProvider.state);
        this._subscriptions.push(this.stateProvider.change.subscribe(state => this.refresh.emit(state)));
        this._subscriptions.push(this.selection.change.subscribe(s => {
            if (this.selection.selectionType === SelectionType.Single) {
                this.singleSelectedChanged.emit(s);
            } else if (this.selection.selectionType === SelectionType.Multi) {
                this.selectedChanged.emit(s);
            }
        }));
        this.displayMode.view.subscribe(viewChange => {
            while (this.projectedDisplayColumns.detach()) {
            }
            while (this.projectedCalculationColumns.detach()) {
            }
            while (this.calculationRows.detach()) {
            }
            while (this.displayedRows.detach()) {
            }
            if (viewChange === DatagridDisplayMode.DISPLAY) {
                this.showDisplayTable = true;
                this.renderer.removeClass(this.el.nativeElement, "datagrid-calculate-mode");
                this.columns.forEach(column => {
                    this.projectedDisplayColumns.insert(column.view);
                });
                this.rows.forEach(row => {
                    this.displayedRows.insert(row.view);
                });
            } else if (viewChange === DatagridDisplayMode.CALCULATE) {
                this.showDisplayTable = false;
                this.renderer.addClass(this.el.nativeElement, "datagrid-calculate-mode");
                this.columns.forEach(column => {
                    this.projectedCalculationColumns.insert(column.view);
                });
                this.rows.forEach(row => {
                    this.calculationRows.insert(row.view);
                });
            }
        });
        // Make sure columns get added when datagrid is first created.
        this.columns.forEach(column => {
            this.projectedDisplayColumns.insert(column.view);
        });

        // Moving here to try fixing conditional pagination issue.
    }

    public display = true;

    /**
     * Subscriptions to all the services and queries changes
     */
    private _subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

    resize(): void {
        this.organizer.resize();
    }

    @ViewChild("projectedDisplayColumns", {read: ViewContainerRef}) projectedDisplayColumns: ViewContainerRef;
    @ViewChild("projectedCalculationColumns", {read: ViewContainerRef}) projectedCalculationColumns: ViewContainerRef;
    @ViewChild("displayedRows", {read: ViewContainerRef}) displayedRows: ViewContainerRef;
    @ViewChild("calculationRows", {read: ViewContainerRef}) calculationRows: ViewContainerRef;
    public showDisplayTable = false;  // Init to calculate when a datagrid is created.
}
