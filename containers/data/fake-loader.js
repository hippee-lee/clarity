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
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { Loading } from "clarity-angular";
var LATENCY = 2000;
var FakeLoader = (function () {
    function FakeLoader(template, container, loading) {
        this.template = template;
        this.container = container;
        this.loading = loading;
    }
    FakeLoader.prototype.ngOnInit = function () {
        var _this = this;
        if (this.fake) {
            this.loading.loading = true;
            setTimeout(function () {
                _this.load();
                _this.loading.loading = false;
            }, LATENCY);
        }
        else {
            this.load();
        }
    };
    FakeLoader.prototype.load = function () {
        this.container.createEmbeddedView(this.template);
    };
    return FakeLoader;
}());
__decorate([
    Input("clrFakeLoader"),
    __metadata("design:type", Boolean)
], FakeLoader.prototype, "fake", void 0);
FakeLoader = __decorate([
    Directive({ selector: "[clrFakeLoader]" }),
    __metadata("design:paramtypes", [TemplateRef, ViewContainerRef, Loading])
], FakeLoader);
export { FakeLoader };
//# sourceMappingURL=fake-loader.js.map