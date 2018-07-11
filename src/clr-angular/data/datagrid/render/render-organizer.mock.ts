/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {DatagridRenderOrganizer} from "./render-organizer";
import {DatagridRenderStep} from "../interfaces/render-step.interface";

/**
 * Mock that gives direct access to the subjects, to trigger specific parts of the render cycle.
 */
@Injectable()
export class MockDatagridRenderOrganizer extends DatagridRenderOrganizer {
    public get renderStep(): Subject<DatagridRenderStep> {
        return this._renderStep;
    }
}

export const MOCK_ORGANIZER_PROVIDER = {
    provide: DatagridRenderOrganizer,
    useClass: MockDatagridRenderOrganizer
};
