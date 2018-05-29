/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, OnDestroy, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {NO_LAYOUT_CLASS} from "./constants";
import {DatagridRenderOrganizer} from "./render-organizer";
import {DatagridRenderStep} from "../interfaces/render-step.interface";

// TODO - this seems like it can be removed now, no?
@Component({
    selector: "clr-dg-table-wrapper",
    template: `
        <ng-content></ng-content>
    `
})
export class DatagridTableRenderer implements OnDestroy {
    constructor(private el: ElementRef, private renderer: Renderer2, organizer: DatagridRenderOrganizer) {
        this.subscriptions.push(organizer.renderStep.subscribe(step => {
            if(step === DatagridRenderStep.NO_LAYOUT_ON) {
                this.noLayout(true);
            } else if (step === DatagridRenderStep.TABLE_MODE_OFF) {
                this.noLayout(false);
            }
        }));
    }

    private subscriptions: Subscription[] = [];
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    private noLayout(on: boolean) {
        if (on) {
            this.renderer.addClass(this.el.nativeElement, NO_LAYOUT_CLASS);
        } else {
            this.renderer.removeClass(this.el.nativeElement, NO_LAYOUT_CLASS);
        }
    }
}
