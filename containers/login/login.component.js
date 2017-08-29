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
import { FormBuilder, Validators } from "@angular/forms";
var KSLogin = (function () {
    function KSLogin(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    KSLogin.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            authSource: "admin",
            username: ["", Validators.required],
            password: ["", Validators.required],
            remember: ""
        });
    };
    KSLogin.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.loginForm.value);
    };
    KSLogin.prototype.login = function () {
        this.submitted = true;
        console.log(this.loginForm.value);
        this.loginForm.reset();
        this.submitted = false;
    };
    return KSLogin;
}());
KSLogin = __decorate([
    Component({ templateUrl: "./login.component.html" }),
    __metadata("design:paramtypes", [FormBuilder])
], KSLogin);
export { KSLogin };
//# sourceMappingURL=login.component.js.map