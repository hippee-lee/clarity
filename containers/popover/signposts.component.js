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
var KSSignposts = (function () {
    function KSSignposts() {
        this.openState = false;
        this.positions = [
            { icon: "help-info", description: "Right bottom", position: "right-bottom", id: "rightBottomTrigger" },
            { icon: "phone-handset", description: "Bottom middle", position: "bottom-middle", id: "bottomMiddleTrigger" },
            { icon: "install", description: "Left bottom", position: "left-bottom", id: "leftBottomTrigger" },
            { icon: "rack-server", description: "Right middle", position: "right-middle", id: "rightMiddleTrigger" },
            { icon: "play", description: "Left middle", position: "left-middle", id: "leftMiddleTrigger" },
            { icon: "balance", description: "Left top", position: "left-top", id: "leftTopTrigger" },
            { icon: "world", description: "Right top", position: "right-top", id: "rightTopTrigger" },
            { icon: "lightbulb", description: "Bottom right", position: "bottom-right", id: "bottomRightTrigger" },
            { icon: "bug", description: "Bottom left", position: "bottom-left", id: "bottomLeftTrigger" },
            { icon: "search", description: "Top right", position: "top-right", id: "topRightTrigger" },
            { icon: "info-circle", description: "Top middle", position: "top-middle", id: "topMiddleTrigger" },
            { icon: "info-standard", description: "Top left", position: "top-left", id: "topLeftTrigger" }
        ];
    }
    return KSSignposts;
}());
KSSignposts = __decorate([
    Component({ templateUrl: "./signposts.component.html" })
], KSSignposts);
export { KSSignposts };
//# sourceMappingURL=signposts.component.js.map