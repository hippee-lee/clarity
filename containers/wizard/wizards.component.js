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
import { Component, ViewChild } from "@angular/core";
import { Wizard } from "clarity-angular";
import { WizardPage } from "clarity-angular";
var KSWizards = (function () {
    function KSWizards() {
        this.basicOpen = false;
        this.skipStepTwo = true;
        this.skipOpen = false;
        this.formOpen = false;
        this.formModel = { name: "", favorite: "", number: "" };
        this.asyncOpen = false;
        this.loadingFlag = false;
        this.asyncErrorFlag = false;
        this.unclosedOpen = false;
        this.ghostOpen = false;
        this.typesOfPages = ["All", "Odd", "First and even", "First and last"];
        this.customButtonsOpen = false;
        this.showWarning = false;
        // Jump open demo
        this.jumpOpen = false;
        this.resetOpen = false;
        this.open = false;
        this.headerOpen = false;
        this.userActive = true;
        this.altCancelOpen = false;
        this.showCancelConfirm = false;
        this.altNextOpen = false;
        this.stressText = false;
        this.errorFlag = false;
        this.inlineOpen = false;
        this.forceOpen = false;
        this.stopOpen = false;
        this.untouched = true;
        this.loading = false;
        // stopErrorFlag: boolean = false; // I changed this but not sure if we need it yet.
        this.progress = 0;
        this.stopModel = { won: "", too: "", tree: "" };
    }
    KSWizards.prototype.toggleStepTwo = function () {
        this.skipStepTwo = !this.skipStepTwo;
    };
    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    KSWizards.prototype.doAsyncCancel = function () {
        this.asyncWizard.close();
    };
    KSWizards.prototype.onAsyncCommit = function () {
        var _this = this;
        var value = this.formData.value;
        this.loadingFlag = true;
        this.asyncErrorFlag = false;
        setTimeout(function () {
            if (value.answer === "42") {
                _this.asyncWizard.forceNext();
            }
            else {
                _this.asyncErrorFlag = true;
            }
            _this.loadingFlag = false;
        }, 1000);
    };
    Object.defineProperty(KSWizards.prototype, "isAll", {
        get: function () {
            return this.ghostModel.typesOfPages === "" || this.ghostModel.typesOfPages === "All" ||
                this.ghostModel.typesOfPages === null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KSWizards.prototype, "showEvenPages", {
        get: function () {
            return this.isAll || this.ghostModel.typesOfPages === "First and even";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KSWizards.prototype, "showPageThree", {
        get: function () {
            return this.isAll || this.ghostModel.typesOfPages === "Odd";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KSWizards.prototype, "showPageFive", {
        get: function () {
            return this.isAll || this.ghostModel.typesOfPages === "Odd" ||
                this.ghostModel.typesOfPages === "First and last";
        },
        enumerable: true,
        configurable: true
    });
    KSWizards.prototype.handleDangerClick = function () {
        this.customButtonWizard.finish(false);
    };
    KSWizards.prototype.doCustomClick = function (buttonType) {
        if ("custom-next" === buttonType) {
            this.customButtonWizard.next(false);
        }
        if ("custom-previous" === buttonType) {
            this.customButtonWizard.previous();
        }
        if ("custom-danger" === buttonType) {
            this.showWarning = true;
        }
    };
    KSWizards.prototype.jumpTo = function (page) {
        if (page && page.completed) {
            this.jumpWizard.navService.currentPage = page;
        }
        else {
            this.jumpWizard.navService.setLastEnabledPageCurrent();
        }
        this.jumpWizard.open();
    };
    KSWizards.prototype.jumpToThree = function () {
        this.jumpTo(this.pageThree);
    };
    KSWizards.prototype.jumpToFive = function () {
        this.jumpTo(this.pageFive);
    };
    KSWizards.prototype.doResetFinish = function () {
        this.doReset();
    };
    KSWizards.prototype.doReset = function () {
        if (this.resetModel.forceReset) {
            this.resetModel.forceReset = false;
            this.resetModel.favoriteColor = "";
            this.resetModel.luckyNumber = "";
            this.resetModel.flavorOfIceCream = "";
            this.resetWizardDemo.reset();
        }
    };
    KSWizards.prototype.headerActionClicked = function (actionId) {
        var newWindow;
        if ("clr-wizard-header-action-search" === actionId) {
            newWindow = window.open("https://www.google.com/#q=what+is+the+meaning+of+life&*", "_blank");
        }
        else if ("clr-wizard-header-action-info" === actionId) {
            newWindow = window.open("http://vmware.github.com/clarity", "_blank");
        }
        else {
            this.userActive = !this.userActive;
        }
    };
    KSWizards.prototype.pageCustomCancel = function () {
        this.showCancelConfirm = true;
    };
    KSWizards.prototype.doPageCancel = function () {
        this.showCancelConfirm = false;
        this.altCancelWizard.close();
    };
    KSWizards.prototype.doAltCancel = function () {
        if (confirm("Do you really, really want to close the altCancelWizard?")) {
            this.showCancelConfirm = false;
            this.altCancelWizard.close();
        }
    };
    KSWizards.prototype.pageCustomNext = function () {
        if (confirm("Are you sure you got it right?")) {
            this.errorFlag = false;
            this.altNextWizard.forceNext();
        }
    };
    KSWizards.prototype.doFinish = function () {
        var sequenceOneIsCorrect = this.altNextModel.sequenceOne === 3;
        var sequenceTwoIsCorrect = this.altNextModel.sequenceTwo === 5;
        var sequenceThreeIsCorrect = this.altNextModel.sequenceThree === 8;
        var allAreCorrect = sequenceOneIsCorrect && sequenceTwoIsCorrect && sequenceThreeIsCorrect;
        if (allAreCorrect) {
            this.altNextWizard.finish();
            // resetting for another pass through
            this.altNextModel.allowNext = false;
            this.altNextModel.sequenceOne = "";
            this.altNextModel.sequenceTwo = "";
            this.altNextModel.sequenceThree = "";
            this.altNextWizard.reset();
            this.errorFlag = false;
        }
        else {
            this.errorFlag = true;
        }
    };
    KSWizards.prototype.doNext = function () {
        if (this.altNextModel.allowNext) {
            this.altNextWizard.forceNext();
            this.stressText = false;
        }
        else {
            this.stressText = true;
        }
    };
    Object.defineProperty(KSWizards.prototype, "readyToFinish", {
        get: function () {
            return !this.untouched && !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    KSWizards.prototype.doCancel = function () {
        this.stopWizard.close();
        this.resetWizard();
    };
    KSWizards.prototype.resetWizard = function () {
        this.stopWizard.reset();
        this.stopModel.won = "";
        this.stopModel.too = "";
        this.stopModel.tree = "";
        this.progress = 0;
    };
    KSWizards.prototype.onCommit = function () {
        var _this = this;
        if (this.untouched) {
            this.untouched = false;
            this.loading = true;
            var timer_1 = setInterval(function () {
                _this.progress = _this.progress + 14;
                if (_this.progress > 99) {
                    _this.progress = 100;
                    _this.loading = false;
                    clearInterval(timer_1);
                }
            }, 1000);
        }
        else {
            this.stopWizard.forceFinish();
            this.resetWizard();
        }
    };
    KSWizards.prototype.ngOnInit = function () {
        // For alt next demo
        this.altNextModel = { allowNext: false, sequenceOne: "", sequenceTwo: "", sequenceThree: "" };
        // For the reset demo
        this.resetModel = { forceReset: false, favoriteColor: "", luckyNumber: "", flavorOfIceCream: "" };
        // For ghosts demo
        this.ghostModel = { typesOfPages: "" };
    };
    return KSWizards;
}());
__decorate([
    ViewChild("basicWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "basicWizard", void 0);
__decorate([
    ViewChild("skipWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "skipWizard", void 0);
__decorate([
    ViewChild("formWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "formWizard", void 0);
__decorate([
    ViewChild("asyncWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "asyncWizard", void 0);
__decorate([
    ViewChild("myForm"),
    __metadata("design:type", Object)
], KSWizards.prototype, "formData", void 0);
__decorate([
    ViewChild("notCloseableWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "notCloseableWizard", void 0);
__decorate([
    ViewChild("ghostWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "ghostWizard", void 0);
__decorate([
    ViewChild("customButtonWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "customButtonWizard", void 0);
__decorate([
    ViewChild("jumpWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "jumpWizard", void 0);
__decorate([
    ViewChild("pageThree"),
    __metadata("design:type", WizardPage)
], KSWizards.prototype, "pageThree", void 0);
__decorate([
    ViewChild("pageFive"),
    __metadata("design:type", WizardPage)
], KSWizards.prototype, "pageFive", void 0);
__decorate([
    ViewChild("resetWizardDemo"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "resetWizardDemo", void 0);
__decorate([
    ViewChild("headerActionWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "headerActionWizard", void 0);
__decorate([
    ViewChild("altCancelWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "altCancelWizard", void 0);
__decorate([
    ViewChild("altNextWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "altNextWizard", void 0);
__decorate([
    ViewChild("inlineWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "inlineWizard", void 0);
__decorate([
    ViewChild("forceWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "forceWizard", void 0);
__decorate([
    ViewChild("stopWizard"),
    __metadata("design:type", Wizard)
], KSWizards.prototype, "stopWizard", void 0);
KSWizards = __decorate([
    Component({ templateUrl: "./wizards.component.html" })
], KSWizards);
export { KSWizards };
//# sourceMappingURL=wizards.component.js.map