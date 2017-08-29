import { RouterModule } from "@angular/router";
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
import { KSLists } from "./containers/lists/lists.component";
import { KSLogin } from "./containers/login/login.component";
import { KSModals } from "./containers/modal/modals.component";
import { KSTabs } from "./containers/nav/tabs.component";
import { KSVerticalNav } from "./containers/nav/vertical-nav.component";
import { KSDropdowns } from "./containers/popover/dropdowns.component";
import { KSSignposts } from "./containers/popover/signposts.component";
import { KSTooltips } from "./containers/popover/tooltips.component";
import { KSTypography } from "./containers/typography/typography.component";
import { KSWizards } from "./containers/wizard/wizards.component";
export var APP_ROUTES = [
    { path: "", redirectTo: "alerts", pathMatch: "full" },
    { path: "alerts", component: KSAlerts },
    { path: "badges", component: KSBadges },
    { path: "buttons", component: KSButtons },
    { path: "button-groups", component: KSButtonGroups },
    { path: "cards", component: KSCards },
    { path: "colors", component: KSColors },
    { path: "datagrids", component: KSDatagrid },
    { path: "stackviews", component: KSStackView },
    { path: "treeviews", component: KSTreeView },
    { path: "labels", component: KSLabels },
    { path: "lists", component: KSLists },
    { path: "login", component: KSLogin },
    { path: "checkboxes", component: KSCheckboxes },
    { path: "forms", component: KSForms },
    { path: "inputs", component: KSInputs },
    { path: "radios", component: KSRadios },
    { path: "selects", component: KSSelects },
    { path: "modals", component: KSModals },
    { path: "tabs", component: KSTabs },
    { path: "vertical-nav", component: KSVerticalNav },
    { path: "dropdowns", component: KSDropdowns },
    { path: "signposts", component: KSSignposts },
    { path: "tooltips", component: KSTooltips },
    { path: "typography", component: KSTypography },
    { path: "wizards", component: KSWizards },
];
export var ROUTING = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map