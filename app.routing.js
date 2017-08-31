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
import { KSAbbeyRoadDemo } from "./containers/nav/beatles/abbey-road";
import { KSBeatlesDemo } from "./containers/nav/beatles/beatles";
import { KSRevolverDemo } from "./containers/nav/beatles/revolver";
import { KSRubberSoulDemo } from "./containers/nav/beatles/rubber-soul";
import { KSTabs } from "./containers/nav/tabs.component";
import { KSDayAndAgeDemo } from "./containers/nav/the-killers/day-and-age";
import { KSHotFussDemo } from "./containers/nav/the-killers/hot-fuss";
import { KSSamsTownDemo } from "./containers/nav/the-killers/sams-town";
import { KSKillersDemo } from "./containers/nav/the-killers/the-killers";
import { KSVerticalNav } from "./containers/nav/vertical-nav.component";
import { KSWikipediaDemo } from "./containers/nav/wikipedia/wikipedia";
import { KSDropdowns } from "./containers/popover/dropdowns.component";
import { KSSignposts } from "./containers/popover/signposts.component";
import { KSTooltips } from "./containers/popover/tooltips.component";
import { KSProgressBars } from "./containers/progress/progress-bars.component";
import { KSSpinners } from "./containers/spinners/spinners.component";
import { KSTables } from "./containers/tables/tables.component";
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
    {
        path: "vertical-nav",
        component: KSVerticalNav,
        children: [
            { path: "", redirectTo: "beatles", pathMatch: "full" }, { path: "beatles", component: KSBeatlesDemo },
            { path: "beatles/abbey-road", component: KSAbbeyRoadDemo },
            { path: "beatles/revolver", component: KSRevolverDemo },
            { path: "beatles/rubber-soul", component: KSRubberSoulDemo }, { path: "killers", component: KSKillersDemo },
            { path: "killers/hot-fuss", component: KSHotFussDemo },
            { path: "killers/day-and-age", component: KSDayAndAgeDemo },
            { path: "killers/sams-town", component: KSSamsTownDemo }, { path: "wikipedia", component: KSWikipediaDemo }
        ]
    },
    { path: "dropdowns", component: KSDropdowns },
    { path: "signposts", component: KSSignposts },
    { path: "tooltips", component: KSTooltips },
    { path: "typography", component: KSTypography },
    { path: "wizards", component: KSWizards },
    { path: "progress-bars", component: KSProgressBars },
    { path: "spinners", component: KSSpinners },
    { path: "tables", component: KSTables }
];
export var ROUTING = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map