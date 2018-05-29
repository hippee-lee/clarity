/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ClrWrappedCell} from "./wrapped-cell";

@Component({
    template: `
        <clr-wrapped-cell #wrapper>Hello World!</clr-wrapped-cell>
    `
})
class WrappedCell {
    @ViewChild("wrapper") wrapper: ClrWrappedCell;
}

interface TestContext {
    fixture: ComponentFixture<WrappedCell>;
    wrapper: ClrWrappedCell;
}

export default function(): void {
    describe("ClrWrappedCell", () => {
        beforeEach(function(this: TestContext) {
            TestBed.configureTestingModule({declarations: [ClrWrappedCell, WrappedCell]});
            this.fixture = TestBed.createComponent(WrappedCell);
            this.wrapper = this.fixture.componentInstance.wrapper;
            this.fixture.detectChanges();
        });
        it("should have a cellView", function(this: TestContext) {
            expect(this.wrapper.cellView).toBeDefined();
        });
        it("should have a templateRef to the portal", function(this: TestContext) {
            expect(this.wrapper.templateRef).toBeDefined();
        });
        it("projects content into the template", function(this: TestContext) {
            expect(this.wrapper.cellView.rootNodes[1].textContent.trim()).toBe("Hello World!");
        });
    });
}
