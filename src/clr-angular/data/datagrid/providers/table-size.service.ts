/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ElementRef, Injectable, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DatagridRenderStep} from "../interfaces/render-step.interface";
import {DatagridRenderOrganizer} from "../render/render-organizer";

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

    constructor(private renderer: Renderer2, private renderOrganizer: DatagridRenderOrganizer) {}
    public set table(table: ElementRef) {
        this.tableRef = table.nativeElement.querySelector(".datagrid-table");
    }

    getColumnDragHeight(): string {
        return `${this.tableRef.clientHeight}px`;
    }
}