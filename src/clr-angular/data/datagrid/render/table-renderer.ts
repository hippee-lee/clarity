/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, OnDestroy, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {/*COMPUTE_WIDTH_CLASS, */NO_LAYOUT_CLASS} from "./constants";
import {DatagridRenderOrganizer} from "./render-organizer";
// import {DisplayModeService} from "../providers/display-mode.service";
import {DatagridRenderStep} from "../interfaces/render-step.interface";

// TODO - this seems like it can be removed now, no?
@Component({
    selector: "clr-dg-table-wrapper",
    template: `
        <ng-content></ng-content>
        <!--<ng-template #head><ng-content select="[clrDgHead]"></ng-content></ng-template>-->
        <!--<ng-container #outside></ng-container>-->
        <!--<div clrDgBody class="datagrid-body">-->
            <!--<ng-container #inside></ng-container>-->
            <!--<ng-content></ng-content>-->
        <!--</div>-->
    `
})
export class DatagridTableRenderer implements OnDestroy {
    constructor(private el: ElementRef, private renderer: Renderer2, organizer: DatagridRenderOrganizer) {
        // TODO: clean up comments
        // this.subscriptions.push(organizer.tableMode.subscribe(on => this.tableMode(on)));
        // this.subscriptions.push(organizer.noLayout.subscribe(on => this.noLayout(on)));
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

    // @ViewChild("head") projected: TemplateRef<any>;
    // @ViewChild("outside", {read: ViewContainerRef}) outsideContainer: ViewContainerRef;
    // @ViewChild("inside", {read: ViewContainerRef}) insideContainer: ViewContainerRef;

    // ngAfterViewInit() {
    //     this.outsideContainer.createEmbeddedView(this.projected);
    // }

    // private tableMode(on: boolean) {
    //     if (on) {
    //         // We move stuff into the body before making it visible
    //         this.insideContainer.insert(this.outsideContainer.detach(0), 0);
    //         this.renderer.addClass(this.el.nativeElement, COMPUTE_WIDTH_CLASS);
    //     } else {
    //         // We make stuff invisible before moving it out of the body
    //         this.renderer.removeClass(this.el.nativeElement, COMPUTE_WIDTH_CLASS);
    //         this.outsideContainer.insert(this.insideContainer.detach(0), 0);
    //     }
    // }

    private noLayout(on: boolean) {
        if (on) {
            this.renderer.addClass(this.el.nativeElement, NO_LAYOUT_CLASS);
        } else {
            this.renderer.removeClass(this.el.nativeElement, NO_LAYOUT_CLASS);
        }
    }
}
