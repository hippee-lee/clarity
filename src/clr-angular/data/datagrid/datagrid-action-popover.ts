/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ElementRef, Inject, Injector, Optional} from "@angular/core";

import {AbstractPopover} from "../../popover/common/abstract-popover";
import {Point} from "../../popover/common/popover";
import {POPOVER_HOST_ANCHOR} from "../../popover/common/popover-host-anchor.token";

@Component({
    selector: "clr-dg-action-popover",
    template: `
        <div class="datagrid-action-overflow">
            <ng-content></ng-content>
        </div>
    `
})
export class ClrDatagridActionPopover extends AbstractPopover {
    private position: string;

    constructor(injector: Injector, @Optional() @Inject(POPOVER_HOST_ANCHOR) parent: ElementRef) {
        super(injector, parent);
        this.position = "right-middle";
        this.closeOnOutsideClick = true;
        this.anchorPoint = Point.RIGHT_CENTER;
        this.popoverPoint = Point.LEFT_CENTER;
    }

    close(event) {
        this.ifOpenService.toggleWithEvent(event);
    }
}