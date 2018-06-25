/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Injectable, InjectionToken} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {DatagridDisplayMode} from "../interfaces/display-mode.interface";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {DatagridRenderOrganizer} from "../render/render-organizer";
import {DatagridRenderStep} from "../interfaces/render-step.interface";

@Injectable()
export class DisplayModeService {
    private _view: Subject<DatagridDisplayMode> = new Subject<DatagridDisplayMode>();

    constructor(renderOrganizer: DatagridRenderOrganizer) {
        renderOrganizer.renderStep.subscribe(step => {
            if(step === DatagridRenderStep.CALCULATE_MODE_ON) {
                this.update(DatagridDisplayMode.CALCULATE);
            } else if(step === DatagridRenderStep.CALCULATE_MODE_OFF) {
                this.update(DatagridDisplayMode.DISPLAY);
            }
        });
    }

    public get view(): Observable<DatagridDisplayMode> {
        return this._view.asObservable();
    }

    public update(view: DatagridDisplayMode) {
        this._view.next(view);
    }
}