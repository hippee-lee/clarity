/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Directive,
    DoCheck,
    Input,
    IterableDiffer,
    IterableDiffers,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    TrackByFunction, ViewContainerRef
} from "@angular/core";

import {Items} from "./providers/items";

export type RowContext<T> = {$implicit: T};

@Directive({
    selector: "[clrDgItems][clrDgItemsOf]",
})
export class ClrDatagridItems<T> implements OnChanges, DoCheck {
    private _rawItems: T[];
    @Input("clrDgItemsOf")
    public set rawItems(items: T[]) {
        this._rawItems = items ? items : [];
    }
    private _differ: IterableDiffer<any>;
    displayed: Array<any> = [];
    constructor(public template: TemplateRef<RowContext<T>>,
                private _differs: IterableDiffers,
                private _items: Items,
                private vcr: ViewContainerRef) {
        _items.smartenUp();
        _items.change.subscribe(items => {
            this.displayed = items;
            this.vcr.clear(); // It is additive if I don't clear the datagrids vcr
            // Will need to use IterableDiff to properly account for trackBy
            // TODO revisit not from session with Eude.
            for (const item of this.displayed) {
                this.vcr.createEmbeddedView(this.template, {$implicit: item});
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ("rawItems" in changes) {
            const currentItems = changes.rawItems.currentValue;
            if (!this._differ && currentItems) {
                this._differ = this._differs.find(currentItems).create(this._items.trackBy);
            }
        }
    }

    @Input("clrDgItemsTrackBy")
    set trackBy(value: TrackByFunction<any>) {
        this._items.trackBy = value;
    }

    ngDoCheck() {
        if (this._differ) {
            const changes = this._differ.diff(this._rawItems);
            if (changes) {
                // TODO: not very efficient right now,
                // but premature optimization is the root of all evil.
                this._items.all = this._rawItems;
            }
        }
    }
}