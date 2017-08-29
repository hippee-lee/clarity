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
import { SortOrder } from "clarity-angular";
import { PokemonComparator } from "./pokemon-comparator";
import { PokemonFilter } from "./pokemon-filter";
//
import { DatagridKitchenSinkData } from "./pokemon.data";
var KSDatagrid = (function () {
    function KSDatagrid() {
        this.currentPageSize = 10;
        this.sortOrder = SortOrder.Unsorted;
        this.pokemonComparator = new PokemonComparator();
        this.pokemonFilter = new PokemonFilter();
        this._selected = [];
        this.toAdd = [];
        this.toDelete = [];
        this.detail = "default";
        this.replace = false;
        this.fixedHeight = false;
        this.slowLoad = false;
        this.showDate = true;
        this.showId = true;
        this.nonPaginatedUsers = DatagridKitchenSinkData.users.slice(0, 5);
        this.variableLengthUsers = DatagridKitchenSinkData.users.slice(0, 5);
        this.users = DatagridKitchenSinkData.users;
    }
    KSDatagrid.prototype.toggleItems = function () {
        if (this.variableLengthUsers.length === 5) {
            this.variableLengthUsers = DatagridKitchenSinkData.users;
        }
        else {
            this.variableLengthUsers = DatagridKitchenSinkData.users.slice(0, 5);
        }
    };
    Object.defineProperty(KSDatagrid.prototype, "selectable", {
        get: function () {
            return !!this.selected2;
        },
        set: function (value) {
            if (value) {
                this.selected2 = [];
            }
            else {
                delete this.selected2;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KSDatagrid.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selection) {
            this._selected = selection;
            this.cleanUp();
        },
        enumerable: true,
        configurable: true
    });
    KSDatagrid.prototype.cleanUp = function () {
        this.toAdd = [];
        this.toDelete = [];
        this.toEdit = null;
    };
    KSDatagrid.prototype.onDelete = function (user) {
        this.cleanUp();
        if (user) {
            this.toDelete = [user];
        }
        else {
            this.toDelete = this.selected.slice();
        }
    };
    KSDatagrid.prototype.onEdit = function (user) {
        this.cleanUp();
        if (user) {
            this.toEdit = user;
        }
        else {
            this.toEdit = this.selected[0];
        }
    };
    KSDatagrid.prototype.onAdd = function () {
        this.cleanUp();
        this.toAdd = this.selected.slice();
    };
    KSDatagrid.prototype.toggleId = function () {
        this.showId = !this.showId;
    };
    return KSDatagrid;
}());
KSDatagrid = __decorate([
    Component({ templateUrl: "./datagrid.component.html" }),
    __metadata("design:paramtypes", [])
], KSDatagrid);
export { KSDatagrid };
//# sourceMappingURL=datagrid.component.js.map