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
        let newWidth: number = 0;

        this.renderer.removeStyle(this.headerRef, "width");
        this.renderer.removeStyle(this.bodyRef, "width");

        this.columns = this.tableRef.querySelectorAll(".datagrid-column");
        // TODO:  convert this to an Array for IE11 it is showing an object error for no forEach method
        this.columns.forEach(item => {
            newWidth += item.clientWidth;
        });
        // TODO - determine if we still need this. remove comment or code.
        // this.renderer.setStyle(this.tableRef, "width", newWidth + "px");
        this.renderer.setStyle(this.headerRef, "width", newWidth + "px");
        this.renderer.setStyle(this.bodyRef, "width", newWidth + "px");
    }
}