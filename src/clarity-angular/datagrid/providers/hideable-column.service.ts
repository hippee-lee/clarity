/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {HideableColumn} from "../hideable-column";


@Injectable()
export class HideableColumnService {

    private _columns: Subject<any> = new Subject<any>();

    get columns(): Observable<any> {
        return this._columns.asObservable();
    }

    get columnChanges(): Observable<HideableColumn> {
        return this._columns.asObservable();
    }

    updateHideableColumns(dgHidableColumn: Object) {
        this._columns.next(dgHidableColumn);
    }
}
