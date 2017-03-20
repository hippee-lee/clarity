/*
 * Copyright (c) 2016 -2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {TemplateRef} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

export class HideableColumn {
    // private _columns: Subject<any> = new Subject<any>();
    private hiddenChanges: Subject<boolean> = new Subject<boolean>();
    constructor(
        private _template: TemplateRef<any>,
        private _id: string,
        private _hidden: boolean = true) {
        this.hiddenChanges.next(_hidden);
    }

    get template () {
        return this._template;
    }

    get id () {
        return this._id;
    }

    get hidden() {
        return this._hidden;
    }

    set hidden(value: boolean) {
        console.log("HiddenColumn - hiddenChange: ", this);
        this._hidden = value;
        this.hiddenChanges.next(value);
    }

    get hiddenChange(): Observable<boolean> {
        return this.hiddenChanges.asObservable();
    }
}
