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
var Status = (function () {
    function Status() {
        this._all = SERVERS;
    }
    Status.prototype.fetch = function () {
        return this._all;
    };
    return Status;
}());
export { Status };
export var SERVERS = [
    { ip: "192.168.1.42", running: false, name: "Crystal View", disabled: true },
    { ip: "192.268.1.19", running: true, name: "Turbulent Foam", disabled: false },
    { ip: "192.268.1.11", running: false, name: "Bright Sunshine", disabled: false },
    { ip: "192.268.1.3", running: true, name: "Scary Numbers", disabled: true },
    { ip: "192.268.1.180", running: false, name: "Loud Silence", disabled: false },
];
var KSCheckboxes = (function () {
    function KSCheckboxes(status) {
        this.status = status;
        this.indeterminateState = true;
        this.nativeIndeterminateState = true;
        this.termsAgreement = true;
        this.active = false;
        this.list = status.fetch();
    }
    KSCheckboxes.prototype.onToggleIndeterminateState = function () {
        this.indeterminateState = !this.indeterminateState;
    };
    return KSCheckboxes;
}());
KSCheckboxes = __decorate([
    Component({
        templateUrl: "./checkboxes.component.html",
        providers: [Status],
    }),
    __metadata("design:paramtypes", [Status])
], KSCheckboxes);
export { KSCheckboxes };
//# sourceMappingURL=checkboxes.component.js.map