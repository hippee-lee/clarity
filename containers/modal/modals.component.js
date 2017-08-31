/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var KSModals = (function () {
    function KSModals() {
        this.opened1 = false;
        this.opened2 = false;
        this.small = false;
        this.large = false;
        this.extraLarge = false;
    }
    return KSModals;
}());
KSModals = __decorate([
    Component({ templateUrl: "./modals.component.html" })
], KSModals);
export { KSModals };
//# sourceMappingURL=modals.component.js.map