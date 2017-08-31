/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var id = 0;
var ProgBarExample = (function () {
    function ProgBarExample(label, title, isLabeled) {
        if (label === void 0) { label = "demo"; }
        if (title === void 0) { title = "Progress Bar"; }
        if (isLabeled === void 0) { isLabeled = false; }
        this.label = label;
        this.title = title;
        this.isLabeled = isLabeled;
        this.demoId = "prog-example-toggle-" + id++;
        this.value = 0;
        this.intervalTimeInMs = 100;
    }
    ProgBarExample.prototype.cssClassnames = function () {
        return ["progress", this.label].join(" ");
    };
    ProgBarExample.prototype.stop = function () {
        clearInterval(this.intervalId);
    };
    ProgBarExample.prototype.reset = function () {
        this.stop();
        this.value = 0;
        this.intervalId = -1;
    };
    ProgBarExample.prototype.start = function () {
        var _this = this;
        if (this.intervalId > -1) {
            this.reset();
        }
        this.intervalId = setInterval(function () {
            _this.run();
        }, this.intervalTimeInMs);
    };
    ProgBarExample.prototype.run = function () {
        var myProgress = this.value;
        var maxProgressIncrement = 15;
        var minProgressIncrement = 4;
        myProgress += Math.random() * (maxProgressIncrement - minProgressIncrement) + minProgressIncrement;
        if (myProgress > 99) {
            this.value = 100;
            this.stop();
        }
        else if (myProgress < 1 || isNaN(myProgress)) {
            this.value = 1;
        }
        else {
            // typescript decides to be fun and complains if the first parameter here is not a string.
            // many good things about TS. but this one is pretty lame...
            this.value = parseInt(myProgress + "", 10);
        }
    };
    return ProgBarExample;
}());
export { ProgBarExample };
//# sourceMappingURL=progress-bar-example.js.map