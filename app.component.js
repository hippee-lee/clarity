var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { APP_ROUTES } from "./app.routing";
var KitchenSinkApp = (function () {
    function KitchenSinkApp() {
        this.routes = APP_ROUTES;
        this.name = "world";
        this.closeMessage = "";
        this.indeterminateState = true;
        this.selected = [];
        this.toAdd = [];
        this.toDelete = [];
        this.selected1 = false;
        this.selected2 = true;
        this.selected3 = true;
        this.indeterminate1 = true;
        this.users = [
            { name: "alice" },
            { name: "bob" },
            { name: "carol" },
        ];
    }
    KitchenSinkApp.prototype.onClose = function () {
        this.closeMessage = "The alert has been closed";
    };
    KitchenSinkApp.prototype.onDelete = function () {
        this.toDelete = this.selected.slice();
        return false;
    };
    KitchenSinkApp.prototype.onEdit = function () {
        this.toEdit = this.selected[0];
        return false;
    };
    KitchenSinkApp.prototype.onAdd = function () {
        this.toAdd = this.selected.slice();
    };
    return KitchenSinkApp;
}());
KitchenSinkApp = __decorate([
    Component({ selector: "kitchen-sink-app", templateUrl: "./app.component.html", styleUrls: ["./main.css"] }),
    __metadata("design:paramtypes", [])
], KitchenSinkApp);
export { KitchenSinkApp };
//# sourceMappingURL=app.component.js.map