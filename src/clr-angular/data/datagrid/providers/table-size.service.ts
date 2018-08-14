/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {isPlatformBrowser} from "@angular/common";
import {ElementRef, Inject, Injectable, PLATFORM_ID} from "@angular/core";

/**
 * @description
 * Internal datagrid service that holds a reference to the clr-dg-table element and exposes a method to get height.
 */
@Injectable()
export class TableSizeService {
    private _tableRef: Element;

    public get tableRef(): Element {
        return this._tableRef;
    }

    public set tableRef(element: Element) {
        this._tableRef = element;
    }

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    public set table(table: ElementRef) {
        if (isPlatformBrowser(this.platformId) && table.nativeElement) {
            this.tableRef = table.nativeElement.querySelector(".datagrid-table");
        }
    }

    // Used when resizing columns to show the column border being dragged.
    getColumnDragHeight(): string {
        return `${this.tableRef.clientHeight}px`;
    }
}