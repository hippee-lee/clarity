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

    _renderStep: Subject<DatagridRenderStep> = new Subject<DatagridRenderStep>();
    public get renderStep(): Observable<DatagridRenderStep> {
      return this._renderStep.asObservable();
    }
    private alreadySized = false;

    public widths: {px: number, strict: boolean}[] = [];

    constructor() {}

    public resize() {
        this.widths.length = 0;
        this._renderStep.next(DatagridRenderStep.CALCULATE_MODE_ON);
        // this._renderStep.next(DatagridRenderStep.NO_LAYOUT_ON); // TODO fix or remove
        if (this.alreadySized) {
            this._renderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
        }
        this._renderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
        // this._renderStep.next(DatagridRenderStep.TABLE_MODE_ON); // TODO fix or remove
        // content in clr-dg-table-wrapper component. TODO: eliminate that component???
        this._renderStep.next(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS);
        // this._renderStep.next(DatagridRenderStep.TABLE_MODE_OFF); // TODO fix or remove
        this._renderStep.next(DatagridRenderStep.ALIGN_COLUMNS);
        // this._renderStep.next(DatagridRenderStep.NO_LAYOUT_OFF); // No one listens to this b/c it used to flip
        // content in clr-dg-table-wrapper component. TODO: eliminate that component???
        // TODO update row widths on table container for sticky scrolling
        // this._renderStep.next(DatagridRenderStep.UPDATE_ROW_WIDTH); // TODO fix or remove
        // this._renderStep.next(DatagridRenderStep.UPDATE_SCROLL_BAR); // TODO fix or remove
        // this.alreadySized = true; // TODO fix or remove (could this be part of the resize issues with fixed col widths?
        this._renderStep.next(DatagridRenderStep.CALCULATE_MODE_OFF);
        // this._renderStep.next(DatagridRenderStep.DONE); // TODO fix or remove
    }
}
