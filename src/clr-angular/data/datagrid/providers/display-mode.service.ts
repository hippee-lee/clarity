/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

import {DatagridDisplayMode} from "../enums/display-mode.enum";
import {DatagridRenderStep} from "../enums/render-step.enum";
import {DatagridRenderOrganizer} from "../render/render-organizer";

@Injectable()
export class DisplayModeService {
    private _view: BehaviorSubject<DatagridDisplayMode> =
        new BehaviorSubject<DatagridDisplayMode>(DatagridDisplayMode.DISPLAY);

    constructor(renderOrganizer: DatagridRenderOrganizer) {
        renderOrganizer.filterRenderSteps(DatagridRenderStep.CALCULATE_MODE_ON)
            .subscribe(() => this._view.next(DatagridDisplayMode.CALCULATE));
        renderOrganizer.filterRenderSteps(DatagridRenderStep.CALCULATE_MODE_OFF)
            .subscribe(() => this._view.next(DatagridDisplayMode.DISPLAY));
    }

    public updateView(mode: DatagridDisplayMode) {
        this._view.next(mode);
    }

    public get view(): Observable<DatagridDisplayMode> {
        return this._view.asObservable();
    }
}