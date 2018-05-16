/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable, TemplateRef} from "@angular/core";

@Injectable()
export class ClrDatagridRowTemplatesService {
    // TODO - type the arrays properly
    private templates: TemplateRef<void>[] = [];  // collection of rowTemplates QueryList preserves the index/order

    // let somone get the array of cells for this row.
    // TODO - type the arrays properly
    public get cells(): TemplateRef<void>[] {
        return this.templates;
    }

    // Let something (a cell) add a template to the collection of rowTemplates
    // TODO - type the arrays properly
    public addTemplate(template: TemplateRef<void>): void {
        this.templates.push(template);
    }
}