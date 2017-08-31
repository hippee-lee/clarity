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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { VerticalNavCases } from "./vertical-nav-cases";
var KSVerticalNav = (function () {
    function KSVerticalNav(verticalNavCases) {
        this.verticalNavCases = verticalNavCases;
        this.option = "link";
        this.groupExpand = true;
        this.navCollapsed = false;
        this.case = this.verticalNavCases.allNestedIconMenu;
    }
    KSVerticalNav.prototype.updateGroupExpand = function (event) {
        this.groupExpand = event;
    };
    KSVerticalNav.prototype.updateNavCollapsed = function (val) {
        this.navCollapsed = val;
    };
    KSVerticalNav.prototype.toggleNav = function () {
        this.navCollapsed = !this.navCollapsed;
    };
    KSVerticalNav.prototype.toggleGroup = function () {
        this.groupExpand = !this.groupExpand;
    };
    return KSVerticalNav;
}());
KSVerticalNav = __decorate([
    Component({ templateUrl: "./vertical-nav.component.html", providers: [VerticalNavCases] }),
    __metadata("design:paramtypes", [VerticalNavCases])
], KSVerticalNav);
export { KSVerticalNav };
//# sourceMappingURL=vertical-nav.component.js.map