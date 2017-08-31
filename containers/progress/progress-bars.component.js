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
import { ProgBarExample } from "./progress-bar-example";
var KSProgressBars = (function () {
    function KSProgressBars() {
        this.value1 = 0;
        this.value2 = 0;
        this.value3 = 0;
        this.staticProgbarValue = 0;
        this.staticDangerValue = 0;
        this.staticSuccessValue = 0;
        this.staticLabeledProgbarValue = 0;
        this.inlineProgress = 0;
        this.inlineProgressTimerId = -1;
        this.inlineStaticProgbarValue = 0;
        this.examples = [
            new ProgBarExample(),
            new ProgBarExample("labeled", "Labeled", true),
            new ProgBarExample("progress-fade", "Fade Out"),
            new ProgBarExample("", "Normal"),
            new ProgBarExample("success", "Success"),
            new ProgBarExample("danger", "Danger/Warning"),
            new ProgBarExample("progress-fade", "Fade Out"),
            new ProgBarExample("flash progress-fade", "Flash Then Fade"),
            new ProgBarExample("flash-danger", "Flash Red, No Fade"),
            new ProgBarExample("flash progress-fade labeled", "Labeled With Success Flash And Fade", true),
        ];
    }
    KSProgressBars.prototype.getNewValue = function () {
        var random = Math.floor(Math.random() * 98) + 1;
        return parseInt(random + "", 10);
    };
    KSProgressBars.prototype.setNewValues = function () {
        this.staticProgbarValue = this.getNewValue();
        this.staticLabeledProgbarValue = this.getNewValue();
        this.staticDangerValue = this.getNewValue();
        this.staticSuccessValue = this.getNewValue();
        this.value1 = this.getNewValue();
        this.value2 = this.getNewValue();
        this.value3 = this.getNewValue();
        this.inlineProgress = this.getNewValue();
        this.inlineStaticProgbarValue = this.getNewValue();
    };
    KSProgressBars.prototype.stopProgressBar = function () {
        if (this.inlineProgressTimerId > -1) {
            clearInterval(this.inlineProgressTimerId);
            this.inlineProgressTimerId = -1;
            this.inlineProgress = 0;
        }
    };
    KSProgressBars.prototype.runProgressBar = function () {
        var _this = this;
        this.stopProgressBar();
        this.inlineProgressTimerId = setInterval(function () {
            var oldProgressValue = _this.inlineProgress;
            var increment = Math.floor(Math.random() * 15) + 1;
            increment = parseInt(increment + "", 10);
            var newProgressValue = oldProgressValue + increment;
            newProgressValue = (newProgressValue > 99) ? 100 : newProgressValue;
            _this.inlineProgress = newProgressValue;
            if (newProgressValue > 99) {
                _this.stopProgressBar();
            }
        }, 300);
    };
    KSProgressBars.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.runProgressBar();
            _this.setNewValues();
        }, 200);
    };
    return KSProgressBars;
}());
KSProgressBars = __decorate([
    Component({ templateUrl: "./progress-bars.component.html" }),
    __metadata("design:paramtypes", [])
], KSProgressBars);
export { KSProgressBars };
//# sourceMappingURL=progress-bars.component.js.map