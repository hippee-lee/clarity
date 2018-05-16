/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable, TemplateRef} from "@angular/core";

import {ClrDatagridCell} from "../datagrid-cell";

@Injectable()
export class ClrDatagridTemplatesService {
    private templatesServices: TemplateRef<void>[][] =
        [];  // collection of rowTemplates needs to be observable? prolly b/c what happens when we add new rows and
             // remove old ones?

    // let somone get the array of cells for this row.
    public get rowTemplates(): TemplateRef<void>[][] {
        return this.templatesServices;
    }

    // Let something (a cell) add a template to the collection of rowTemplates
    public addTemplateService(service: TemplateRef<void>[]): void {
        this.templatesServices.push(service);
    }
}