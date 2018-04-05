/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Component} from "@angular/core";

import {DatagridKitchenSinkData} from "../kitchen-sink/kitchen-sink-data";

@Component({
    selector: "clr-datagrid-pinned-column-demo",
    templateUrl: "./pinned-columns.html",
    styles: [`
        .pinned-columns {
            height: 20rem;
        }
    `]
})
export class DatagridPinnedColumnDemo {
    users = DatagridKitchenSinkData.users;
    selected = [];
}