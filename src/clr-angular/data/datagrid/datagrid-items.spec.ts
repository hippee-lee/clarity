/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {TestBed} from "@angular/core/testing";

import {ClrDatagridItems} from "./datagrid-items";
import {ClrDatagridModule} from "./datagrid.module";
import {FiltersProvider} from "./providers/filters";
import {Items} from "./providers/items";
import {Page} from "./providers/page";
import {Sort} from "./providers/sort";
import {StateDebouncer} from "./providers/state-debouncer.provider";

export default function(): void {
    describe("ClrDatagridItems directive", function() {
        beforeEach(function() {
            /*
             * Since the ClrDatagridItems element is a template that isn't rendered in the DOM,
             * we can't use our usual shortcut, we need to rely on @ViewChild
             */
            TestBed.configureTestingModule({
                imports: [ClrDatagridModule],
                declarations: [FullTest],
                providers: [Items, FiltersProvider, Sort, Page, StateDebouncer]
            });
            this.fixture = TestBed.createComponent(FullTest);
            this.fixture.detectChanges();
            this.testComponent = this.fixture.componentInstance;
            this.clarityDirective = this.fixture.componentInstance.datagridItems;
            this.itemsProvider = TestBed.get(Items);
        });

        afterEach(function() {
            this.fixture.destroy();
        });

        it("makes the Items provider smart", function() {
            expect(this.itemsProvider.smart).toBe(true);
        });

        it("receives an input for the array of items", function() {
            expect(this.itemsProvider.displayed).toEqual([1, 2, 3, 4, 5]);
        });

        it("subscribes to changes in the datagrid Items (_items)", function() {
            // testing the observable subscription in the constructore
            this.testComponent.numbers.push(6);
            this.fixture.detectChanges();
            expect(this.itemsProvider.displayed).toEqual([1, 2, 3, 4, 5, 6]);
        });

        it("handles a null input for the array of items", function() {
            this.testComponent.numbers = null;
            this.fixture.detectChanges();
            expect(this.clarityDirective._rawItems).toEqual([]);
        });

        it("handles an undefined input for the array of items", function() {
            this.testComponent.numbers = undefined;
            this.fixture.detectChanges();
            expect(this.clarityDirective._rawItems).toEqual([]);
        });

        it("keeps the Items provider up to date with array changes", function() {
            expect(this.itemsProvider.displayed).toEqual([1, 2, 3, 4, 5]);
            this.testComponent.numbers[0] = 6;
            this.fixture.detectChanges();
            expect(this.itemsProvider.displayed).toEqual([6, 2, 3, 4, 5]);
            this.testComponent.numbers = [];
            this.fixture.detectChanges();
            expect(this.itemsProvider.displayed).toEqual([]);
        });

        it("receives an input for the trackBy option", function() {
            expect(this.itemsProvider.trackBy).toBeUndefined();
            this.testComponent.trackBy = (index: number, item: any) => index;
            this.fixture.detectChanges();
            expect(this.itemsProvider.trackBy).toBe(this.testComponent.trackBy);
        });
    });
}


@Component({template: `<div *clrDgItems="let n of numbers; trackBy: trackBy">{{n}}</div>`})
class FullTest {
    @ViewChild(ClrDatagridItems) datagridItems: ClrDatagridItems<any>;

    numbers = [1, 2, 3, 4, 5];

    trackBy: (index: number, item: any) => any;
}
