var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClrAlertModule, ClrButtonGroupModule, ClrDataModule, ClrFormsModule, ClrIconModule, ClrLayoutModule, ClrPopoverModule } from "clarity-angular";
import { KitchenSinkApp } from "./app.component";
import { ROUTING } from "./app.routing";
import { KSButtonGroups } from "./containers/buttons/button-groups.component";
import { KSButtons } from "./containers/buttons/buttons.component";
import { KSCards } from "./containers/cards/cards.component";
import { KSColors } from "./containers/colors/colors.component";
import { KSDatagrid } from "./containers/data/datagrid.component";
import { KSStackView } from "./containers/data/stackview.component";
import { KSTreeView } from "./containers/data/tree-view.component";
import { KSAlerts } from "./containers/emphasis/alerts.component";
import { KSBadges } from "./containers/emphasis/badges.component";
import { KSLabels } from "./containers/emphasis/labels.component";
import { KSCheckboxes } from "./containers/forms/checkboxes.component";
import { KSForms } from "./containers/forms/forms.component";
import { KSInputs } from "./containers/forms/inputs.component";
import { KSRadios } from "./containers/forms/radios.component";
import { KSSelects } from "./containers/forms/selects.component";
import { KSModals } from "./containers/modal/modals.component";
import { KSTabs } from "./containers/nav/tabs.component";
import { KSVerticalNav } from "./containers/nav/vertical-nav.component";
import { KSDropdowns } from "./containers/popover/dropdowns.component";
import { KSSignposts } from "./containers/popover/signposts.component";
import { KSTooltips } from "./containers/popover/tooltips.component";
import { KSTypography } from "./containers/typography/typography.component";
import { KSWizards } from "./containers/wizard/wizards.component";
var KitchenSinkModule = (function () {
    function KitchenSinkModule() {
    }
    return KitchenSinkModule;
}());
KitchenSinkModule = __decorate([
    NgModule({
        imports: [
            BrowserAnimationsModule, BrowserModule, FormsModule,
            ClrLayoutModule,
            ClrIconModule, ClrButtonGroupModule, ClrDataModule, ClrFormsModule, ClrAlertModule, ClrPopoverModule, ROUTING
        ],
        declarations: [
            KitchenSinkApp, KSAlerts, KSBadges, KSButtons, KSButtonGroups, KSColors, KSDatagrid, KSStackView,
            KSTreeView, KSLabels, KSCheckboxes, KSForms, KSInputs, KSRadios, KSSelects, KSModals,
            KSTabs, KSVerticalNav, KSDropdowns, KSSignposts, KSTooltips, KSTypography, KSWizards, KSCards
        ],
        bootstrap: [KitchenSinkApp]
    })
], KitchenSinkModule);
export { KitchenSinkModule };
//# sourceMappingURL=app.module.js.map