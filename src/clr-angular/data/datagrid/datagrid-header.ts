/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {AfterViewInit, Component, ContentChildren, QueryList, ViewChild, ViewContainerRef} from "@angular/core";
import {ClrDatagridColumn} from "./datagrid-column";
import {ClrDatagridCell} from "./datagrid-cell";

@Component({
    selector: "clr-dg-header",
    template: `
        <div class="datagrid-header" [ngClass]="{'datagrid-pinned-column': _pinnedColumn}">
            <div class="datagrid-row">
                <div class="datagrid-row-master datagrid-row-flex">
                    <div class="datagrid-row-sticky">
                         <!--header for datagrid where you can select multiple rows -->
                        <div class="datagrid-column datagrid-select datagrid-fixed-column"
                             *ngIf="selection.selectionType === SELECTION_TYPE.Multi">
                        <span class="datagrid-column-title">
                            <clr-checkbox [(ngModel)]="allSelected"></clr-checkbox>
                        </span>
                            <div class="datagrid-column-separator"></div>
                        </div>
                        <!-- header for datagrid where you can select one row only -->
                        <div class="datagrid-column datagrid-select datagrid-fixed-column"
                             *ngIf="selection.selectionType === SELECTION_TYPE.Single">
                            <div class="datagrid-column-separator"></div>
                        </div>
                        <!-- header for single row action; only display if we have at least one actionable row in datagrid -->
                        <div class="datagrid-column datagrid-row-actions datagrid-fixed-column"
                             *ngIf="rowActionService.hasActionableRow">
                            <div class="datagrid-column-separator"></div>
                        </div>
                        <!-- header for carets; only display if we have at least one expandable row in datagrid -->
                        <div class="datagrid-column datagrid-expandable-caret datagrid-fixed-column"
                             *ngIf="expandableRows.hasExpandableRow">
                            <div class="datagrid-column-separator"></div>
                        </div>
                    </div>
                    <div class="datagrid-row-scrollable">
                        <ng-container #scrollableColumns></ng-container>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class ClrDatagridHeader implements AfterViewInit {

    @ContentChildren(ClrDatagridColumn) columns: QueryList<ClrDatagridColumn>;
    @ViewChild("scrollableColumns", {read: ViewContainerRef}) scrollableColumns: ViewContainerRef;

    ngAfterViewInit() {
        console.log("header component: ", this.columns, this.scrollableColumns);
        this.columns.forEach(column => {
            this.scrollableColumns.insert(column.view);
        });
    }
}