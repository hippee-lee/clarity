/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {InjectionToken} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export enum DatagridDisplayMode {
    DISPLAY,
    CALCULATE
}

export const DATAGRID_DISPLAY_STATE = new InjectionToken<BehaviorSubject<DatagridDisplayMode>>("Mode");