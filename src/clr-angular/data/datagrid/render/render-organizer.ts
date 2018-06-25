/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {TableSizeService} from "../providers/table-size.service";
import {DatagridRenderStep} from "../interfaces/render-step.interface";


@Injectable()
export class DatagridRenderOrganizer {


    // Now switch all the exisint listeners over to use logic for thier particular step, or filter it in the subscription. Yes filter it in the subscription.
    _renderStep: Subject<DatagridRenderStep> = new Subject<DatagridRenderStep>();
    public get renderStep(): Observable<DatagridRenderStep> {
      return this._renderStep.asObservable();
    }
    private alreadySized = false;

    public widths: {px: number, strict: boolean}[] = [];

    // TODO remove comments and clean up.
    // protected _noLayout = new Subject<boolean>();
    // public get noLayout(): Observable<boolean> {
    //     return this._noLayout.asObservable();
    // }

    // protected _clearWidths = new Subject<any>();
    // public get clearWidths(): Observable<any> {
    //     return this._clearWidths.asObservable();
    // }

    // protected _detectStrictWidths = new Subject<any>();
    // public get detectStrictWidths(): Observable<any> {
    //     return this._detectStrictWidths.asObservable();
    // }

    // protected _tableMode = new Subject<boolean>();
    // public get tableMode(): Observable<boolean> {
    //     return this._tableMode.asObservable();
    // }

    // protected _computeWidths = new Subject<any>();
    // public get computeWidths(): Observable<any> {
    //     return this._computeWidths.asObservable();
    // }

    // protected _alignColumns = new Subject<any>();
    // public get alignColumns(): Observable<any> {
    //     return this._alignColumns.asObservable();
    // }
    //
    // public scrollbar = new Subject<any>();
    // public scrollbarWidth = new Subject<number>();
    //
    // protected _done = new Subject<any>();
    // public get done(): Observable<any> {
    //     return this._done.asObservable();
    // }

    constructor() {}

    public resize() {
        this.widths.length = 0;
        this._renderStep.next(DatagridRenderStep.CALCULATE_MODE_ON);
        // this._renderStep.next(DatagridRenderStep.NO_LAYOUT_ON);
        if (this.alreadySized) {
            this._renderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
        }
        this._renderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
        // this._renderStep.next(DatagridRenderStep.TABLE_MODE_ON); // Nonone listens to this b/c it used to flip
        // content in clr-dg-table-wrapper component. TODO: eliminate that component???
        this._renderStep.next(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS);
        // this._renderStep.next(DatagridRenderStep.TABLE_MODE_OFF);
        this._renderStep.next(DatagridRenderStep.ALIGN_COLUMNS);
        // this._renderStep.next(DatagridRenderStep.NO_LAYOUT_OFF); // Nonone listens to this b/c it used to flip
        // content in clr-dg-table-wrapper component. TODO: eliminate that component???
        // TODO update row widths on table container for sticky scrolling
        // this._renderStep.next(DatagridRenderStep.UPDATE_ROW_WIDTH);
        // this._renderStep.next(DatagridRenderStep.UPDATE_SCROLL_BAR);
        // this.alreadySized = true;
        // TODO fix chocolate error.
        // setTimeout(() => {
            this._renderStep.next(DatagridRenderStep.CALCULATE_MODE_OFF);
        // }, 0);
        // this._renderStep.next(DatagridRenderStep.DONE);

        // TODO remove original steps
        // this.widths.length = 0;
        // this._noLayout.next(true);
        // if (this.alreadySized) {
        //     this._clearWidths.next();
        // }
        // this._detectStrictWidths.next();
        // this._tableMode.next(true);
        // this._computeWidths.next();
        // this._tableMode.next(false);
        // this._alignColumns.next();
        // this._noLayout.next(false);
        // this.scrollbar.next();
        // this.alreadySized = true;
        // this._done.next();
    }
}
