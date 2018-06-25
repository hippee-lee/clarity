/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DomAdapter} from "./dom-adapter";
import {DatagridRenderOrganizer} from "./render-organizer";
import {DatagridRenderStep} from "../interfaces/render-step.interface";

@Directive({selector: "[clrDgBody]"})
export class DatagridBodyRenderer implements OnDestroy {
    constructor(private el: ElementRef, private organizer: DatagridRenderOrganizer, private domAdapter: DomAdapter) {
        // TODO remove comments and clean code.
        // this.subscription = organizer.scrollbar.subscribe(() => this.computeScrollbarWidth());
        this.subscription = organizer.renderStep.subscribe(step => {
            if (step === DatagridRenderStep.UPDATE_SCROLL_BAR) {
                this.computeScrollbarWidth();
            }
        });
    }

    private subscription: Subscription;
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private computeScrollbarWidth() {
        // TODO revisit scrollbar adjustments after caluculations are working
        // TODO clean up code and fix or remove this.
        // this.organizer.scrollbarWidth.next(this.domAdapter.scrollBarWidth(this.el.nativeElement));
    }
}
