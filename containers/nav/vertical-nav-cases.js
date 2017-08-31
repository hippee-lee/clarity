/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var VerticalNavCases = (function () {
    function VerticalNavCases() {
        var _this = this;
        this.basicMenu = {
            title: "Basic",
            items: [
                { label: "Music Note Text" }, { label: "Bug Text" }, { label: "Bolt Text" },
                { label: "Edit has a long text that should overflow" }, { label: "Hourglass Text" }, { label: "Happy Face Text" },
                { label: "Flame Text" }, { label: "Thermometer Text" }, { label: "Lightbulb Text" }
            ]
        };
        this.iconMenu = {
            title: "With icons",
            items: [
                { label: "Music Note Text", icon: "music-note" },
                { label: "Bug has a long text that should overflow", icon: "bug" }, { label: "Bolt Text", icon: "bolt" },
                { label: "Edit Text", icon: "edit" }, { label: "Hourglass Text", icon: "hourglass" },
                { label: "Happy Face Text", icon: "happy-face" }, { label: "Flame Text", icon: "flame" },
                { label: "Thermometer Text", icon: "thermometer" }, { label: "Lightbulb Text", icon: "lightbulb" }
            ]
        };
        this.allNestedMenu = {
            title: "When all items have nested items",
            items: this.basicMenu.items.map(function (item) {
                var newItem = Object.create(item);
                newItem.children = _this.basicMenu.items;
                return newItem;
            })
        };
        this.partiallyNestedMenu = {
            title: "When some items have nested items",
            items: this.basicMenu.items.map(function (item, index) {
                var newItem = Object.create(item);
                if (index < 4) {
                    newItem.children = _this.basicMenu.items;
                }
                return newItem;
            })
        };
        this.allNestedIconMenu = {
            title: "When all items with icon have nested items",
            items: this.iconMenu.items.map(function (item) {
                var newItem = Object.create(item);
                newItem.children = _this.basicMenu.items;
                return newItem;
            }),
            hasIcons: true
        };
        this.partiallyNestedIconMenu = {
            title: "When some items with icon have nested items",
            items: this.iconMenu.items.map(function (item, index) {
                var newItem = Object.create(item);
                if (index < 4) {
                    newItem.children = _this.basicMenu.items;
                }
                return newItem;
            }),
            hasIcons: true
        };
        this.nonCollapsedMenus = [
            this.basicMenu, this.iconMenu, this.allNestedMenu, this.partiallyNestedMenu, this.allNestedIconMenu,
            this.partiallyNestedIconMenu
        ];
    }
    return VerticalNavCases;
}());
export { VerticalNavCases };
//# sourceMappingURL=vertical-nav-cases.js.map