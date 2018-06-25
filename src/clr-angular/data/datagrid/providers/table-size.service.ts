/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ElementRef, Injectable, Renderer2} from "@angular/core";
import {DatagridRenderOrganizer} from "../render/render-organizer";
import {DatagridRenderStep} from "../interfaces/render-step.interface";
import {Subscription} from "rxjs/Subscription";

/**
 * @description
 * Internal datagrid service that holds a reference to the clr-dg-table element and exposes a method to get height.
 */
@Injectable()
export class TableSizeService {
    private bodyRef: Element;
    private columns: any;
    private headerRef: Element;
    private tableRef: Element;
    private subscription: Subscription;

    constructor(private renderer: Renderer2, private renderOrganizer: DatagridRenderOrganizer) {
        this.subscription = renderOrganizer.renderStep.subscribe(step => {
            if (step === DatagridRenderStep.UPDATE_ROW_WIDTH) {
                this.updateRowWidth();
            }
        });
    }
    // Originally was setting the tableRef in tabler-render.ts constructor, but that doesn't seem right.
    public set table(table: ElementRef) {
        this.tableRef = table.nativeElement.querySelector(".datagrid-table");
        this.headerRef = table.nativeElement.querySelector(".datagrid-header");
        this.bodyRef = table.nativeElement.querySelector(".datagrid-body");
    }

    getColumnDragHeight(): string {
        return `${this.tableRef.clientHeight}px`;
    }

    updateRowWidth() {
        // TODO bring this back after smart sizing works again.
        /**
         * This code is shitty
         * Proof-of-concept always is
         * Not for production
         */
        // let newWidth: number = 0;

        // this.renderer.removeStyle(this.headerRef, "width");
        // this.renderer.removeStyle(this.bodyRef, "width");

        // this.columns = this.tableRef.querySelectorAll(".datagrid-column");
        // console.log(this.columns, tableBody, tableHeader);
        // Need to convert this to an Array for IE11 it is showing an object error for no forEach method
        // this.columns.forEach(item => {
        //     newWidth += item.clientWidth;
        // });
        // this.renderer.setStyle(this.tableRef, "width", newWidth + "px"); // Do we need this?
        // this.renderer.setStyle(this.headerRef, "width", newWidth + "px");
        // this.renderer.setStyle(this.bodyRef, "width", newWidth + "px");
        // console.log("calculating width from columns", newWidth + "px");
    }
}