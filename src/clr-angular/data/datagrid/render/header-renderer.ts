/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, OnDestroy, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DatagridColumnResizer} from "./column-resizer";
import {STRICT_WIDTH_CLASS} from "./constants";
import {DomAdapter} from "./dom-adapter";
import {DatagridRenderOrganizer} from "./render-organizer";
import {DatagridRenderStep} from "../interfaces/render-step.interface";

@Directive({selector: "clr-dg-column"})
export class DatagridHeaderRenderer implements OnDestroy {
    constructor(private el: ElementRef, private renderer: Renderer2, organizer: DatagridRenderOrganizer,
                private domAdapter: DomAdapter, private columnResizer: DatagridColumnResizer) {
        // TODO clean up code and remove comments.
        // this.subscriptions.push(organizer.clearWidths.subscribe(() => this.clearWidth()));
        this.subscription = organizer.renderStep.subscribe(step => {
            if (step === DatagridRenderStep.CLEAR_WIDTHS) {
                this.clearWidth();
            } else if (step === DatagridRenderStep.DETECT_STRICT_WIDTHS) {
                this.detectStrictWidth();
            }
        });
    }

    private subscription: Subscription;

    /**
     * Indicates if the column has a strict width, so it doesn't shrink or expand based on the content.
     */
    public strictWidth: number;
    private widthSet: boolean = false;

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private clearWidth() {
        // remove the width only if we set it, and it is not changed by dragging.
        if (this.widthSet && !this.columnResizer.columnResizeBy) {
            this.renderer.setStyle(this.el.nativeElement, "width", null);
        }
    }

    private detectStrictWidth() {
        // this.columnResizer.columnRessizeBy is always false until user resizes a column
        if (this.columnResizer.columnResizeBy) {
            this.strictWidth = this.columnResizer.columnRectWidth + this.columnResizer.columnResizeBy;
        } else {
            this.strictWidth = this.domAdapter.userDefinedWidth(this.el);
            // first time through rendering, this always runs.
            console.log("userDefined Width: ", this.strictWidth);
        }
    }

    public computeWidth(): number {
        let width: number = this.strictWidth;
        if (!width) {
            width = this.domAdapter.scrollWidth(this.el.nativeElement);
        }
        return width;
    }

    public setWidth(width: number) {
        if (this.strictWidth) {
            if (this.columnResizer.columnResizeBy) { // inits to zero evaluates to false.
                this.renderer.setStyle(this.el.nativeElement, "width", width + "px");
                this.columnResizer.columnResizeBy = 0;
                this.widthSet = false;
            }
            this.renderer.addClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
            // We don't actually set the width if there already is a user-defined one, we just add the class
            // return; // Removed this to fix the initial width rendering of columns/headers
                       // It seemed to work with simple resize test on columns.
        }
        this.renderer.removeClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
        this.renderer.setStyle(this.el.nativeElement, "width", width + "px");
        this.widthSet = true;
    }
}
