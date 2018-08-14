/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ClrWrappedColumn} from "./wrapped-column";

@Component({
    template: `
        <dg-wrapped-column #wrapper>Hello World!</dg-wrapped-column>
    `
})
class WrappedColumn {
    @ViewChild("wrapper") wrapper: ClrWrappedColumn;
}

interface TestContext {
    fixture: ComponentFixture<WrappedColumn>;
    wrapper: ClrWrappedColumn;
}

export default function(): void {
    describe("ClrWrappedColumn", () => {
        beforeEach(function(this: TestContext) {
            TestBed.configureTestingModule({declarations: [ClrWrappedColumn, WrappedColumn]});
            this.fixture = TestBed.createComponent(WrappedColumn);
            this.wrapper = this.fixture.componentInstance.wrapper;
            this.fixture.detectChanges();
        });
        it("should have a columnView", function(this: TestContext) {
            expect(this.wrapper.columnView).toBeDefined();
        });
        it("should have a templateRef to the portal", function(this: TestContext) {
            expect(this.wrapper.templateRef).toBeDefined();
        });
        it("projects content into the template", function(this: TestContext) {
            expect(this.wrapper.columnView.rootNodes[1].textContent.trim()).toBe("Hello World!");
        });
    });
}