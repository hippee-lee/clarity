/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Component, TemplateRef, ViewChild} from "@angular/core";

import {DynamicWrapper} from "../../utils/host-wrapping/dynamic-wrapper";
import {ClrDatagridRowTemplatesService} from "./providers/row-templates.service";

@Component({
    selector: "clr-wrapped-cell",
    template: `        
        <ng-template #cellPortal>
            <ng-content></ng-content>
        </ng-template>
    `,
})
export class ClrWrappedCell implements DynamicWrapper, AfterViewInit {
    _dynamic = false;
    @ViewChild("cellPortal") templateRef: TemplateRef<any>;

    constructor(private rowTemplatesService: ClrDatagridRowTemplatesService) {}

    ngAfterViewInit() {
        this.rowTemplatesService.addTemplate(this.templateRef);
    }
}