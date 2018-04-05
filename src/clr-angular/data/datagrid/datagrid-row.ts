/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterContentInit,
    Component,
    ContentChildren,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    Output,
    QueryList, TemplateRef, ViewChild, ViewContainerRef
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


let nbRow: number = 0;

@Component({
    selector: "clr-dg-row",
    template: `
        <div class="datagrid-row-master datagrid-row-flex">
            <div class="datagrid-row-sticky" #stickyContainer>>
                <clr-dg-cell *ngIf="selection.selectionType === SELECTION_TYPE.Multi"
                             class="datagrid-select datagrid-fixed-column">
                    <clr-checkbox [clrChecked]="selected" (clrCheckedChange)="toggle($event)"></clr-checkbox>
                </clr-dg-cell>
                <clr-dg-cell *ngIf="selection.selectionType === SELECTION_TYPE.Single"
                             class="datagrid-select datagrid-fixed-column">
                    <div class="radio">
                        <input type="radio" [id]="id" [name]="selection.id + '-radio'" [value]="item"
                               [(ngModel)]="selection.currentSingle" [checked]="selection.currentSingle === item">
                        <label for="{{id}}"></label>
                    </div>
                </clr-dg-cell>
                <clr-dg-cell *ngIf="rowActionService.hasActionableRow"
                             class="datagrid-row-actions datagrid-fixed-column">
                    <ng-content select="clr-dg-action-overflow"></ng-content>
                </clr-dg-cell>
                <clr-dg-cell *ngIf="globalExpandable.hasExpandableRow"
                             class="datagrid-expandable-caret datagrid-fixed-column">
                    <ng-container *ngIf="expand.expandable">
                        <button (click)="toggleExpand()" *ngIf="!expand.loading" type="button" class="datagrid-expandable-caret-button">
                            <clr-icon shape="caret" [attr.dir]="expand.expanded?'down':'right'" class="datagrid-expandable-caret-icon"></clr-icon>
                        </button>
                        <div class="spinner spinner-sm" *ngIf="expand.loading"></div>
                    </ng-container>
                </clr-dg-cell>
                <ng-container #stickyCells><div></div></ng-container>
            </div>
            <div class="datagrid-row-scrollable" #scrollableCells>
                <div class="datagrid-scrolling-cells" *ngIf="!expand.replace || !expand.expanded || expand.loading">
                    <div #scrollableCells></div>
                </div>
                <div class="datagrid-row-detail-wrapper" *ngIf="expand.expanded && !expand.loading">
                    <ng-content select="clr-dg-row-detail"></ng-content>
                    <!-- replaced-->
                    <!-- <ng-template *ngIf="!expand.replace && expand.expanded && !expand.loading"
                     [ngTemplateOutlet]="detail"></ng-template>-->
                </div>
            </div>
    `,
    host: {
        "[class.datagrid-row]": "true",
        "[class.datagrid-selected]": "selected",
        "[attr.tabindex]": "selection.rowSelectionMode ? 0 : null"
    },
    providers: [Expand, {provide: LoadingListener, useExisting: Expand}]
})
export class ClrDatagridRow implements AfterContentInit {
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

    constructor(public selection: Selection, public rowActionService: RowActionService,
                public globalExpandable: ExpandableRowsCount, public expand: Expand,
                public hideableColumnService: HideableColumnService) {
        this.id = "clr-dg-row" + (nbRow++);
        this.role = selection.rowSelectionMode ? "button" : null;
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

    ngOnInit() {
        setTimeout(() => {
            this.stickyCells.createEmbeddedView(this.projectedCells);
        });
    }

    @ViewChild("projectedCells") projectedCells: TemplateRef<void>;
    @ViewChild("stickyCells", {read: ViewContainerRef}) stickyCells: ViewContainerRef;
    @ViewChild("scrollableCells", {read: ViewContainerRef}) scrollableCells: ViewContainerRef;
}
