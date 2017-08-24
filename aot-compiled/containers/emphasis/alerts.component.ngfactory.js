/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '../../node_modules/clarity-angular/emphasis/alert/alert.ngfactory';
import * as i2 from 'clarity-angular/emphasis/alert/providers/icon-and-types-service';
import * as i3 from 'clarity-angular/emphasis/alert/alert';
import * as i4 from '../../node_modules/clarity-angular/emphasis/alert/alert-item.ngfactory';
import * as i5 from 'clarity-angular/emphasis/alert/alert-item';
import * as i6 from '../../node_modules/clarity-angular/popover/dropdown/dropdown.ngfactory';
import * as i7 from 'clarity-angular/utils/conditional/if-open.service';
import * as i8 from 'clarity-angular/popover/dropdown/dropdown';
import * as i9 from 'clarity-angular/popover/dropdown/dropdown-trigger';
import * as i10 from 'clarity-angular/icon/icon';
import * as i11 from '../../node_modules/clarity-angular/popover/dropdown/dropdown-menu.ngfactory';
import * as i12 from 'clarity-angular/popover/dropdown/dropdown-menu';
import * as i13 from 'clarity-angular/popover/dropdown/dropdown-item';
import * as i14 from '../../../containers/emphasis/alerts.component';
var styles_KSAlerts = [];
export var RenderType_KSAlerts = i0.ɵcrt({ encapsulation: 2, styles: styles_KSAlerts,
    data: {} });
export function View_KSAlerts_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['Alerts'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Not Closeable'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 47, 'clr-alert', [], null, null, null, i1.View_Alert_0, i1.RenderType_Alert)), i0.ɵprd(512, null, i2.AlertIconAndTypesService, i2.AlertIconAndTypesService, []), i0.ɵdid(49152, null, 0, i3.Alert, [i2.AlertIconAndTypesService], { closable: [0, 'closable'] }, null), (_l()(), i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵeld(0, null, 0, 42, 'div', [['class', 'alert-item alert-item']], null, null, null, i4.View_AlertItem_0, i4.RenderType_AlertItem)), i0.ɵdid(49152, null, 0, i5.AlertItem, [i2.AlertIconAndTypesService], null, null), (_l()(),
            i0.ɵted(0, ['\n            '])), (_l()(), i0.ɵeld(0, null, 0, 1, 'span', [['class',
                'alert-text']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                This alert cannot be dismissed.\n            '])),
        (_l()(), i0.ɵted(0, ['\n        '])), (_l()(), i0.ɵeld(0, null, 0, 35, 'div', [['class', 'alert-actions']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'a', [['class', 'alert-action'], ['href',
                    'javascript://']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Acknowledge'])), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [['class', 'alert-action'], ['href', 'javascript://']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Reset'])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 26, 'clr-dropdown', [], [[2, 'dropdown', null], [2, 'open', null]], null, null, i6.View_Dropdown_0, i6.RenderType_Dropdown)), i0.ɵprd(512, null, i7.IfOpenService, i7.IfOpenService, []), i0.ɵdid(49152, null, 0, i8.Dropdown, [[3, i8.Dropdown], i7.IfOpenService], null, null), (_l()(),
            i0.ɵted(0, ['\n                '])), (_l()(), i0.ɵeld(0, null, 0, 5, 'button', [['class', 'dropdown-toggle'], ['clrDropdownTrigger', '']], [[2, 'dropdown-toggle',
                null], [2, 'dropdown-item', null], [2, 'expandable', null],
            [2, 'active', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 29).onDropdownTriggerClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i9.DropdownTrigger, [i8.Dropdown, i7.IfOpenService], null, null), (_l()(), i0.ɵted(null, ['\n                    More Actions\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'clr-icon', [['shape', 'caret down']], null, null, null, null, null)), i0.ɵdid(16384, null, 0, i10.IconCustomTag, [], null, null),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(0, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, 0, 14, 'clr-dropdown-menu', [['clrPosition', 'bottom-right']], [[2, 'dropdown-menu', null], [4, 'visibility', null]], null, null, i11.View_DropdownMenu_0, i11.RenderType_DropdownMenu)), i0.ɵdid(8568832, null, 0, i12.DropdownMenu, [i0.Injector, [1, i0.ElementRef], [3, i12.DropdownMenu]], { position: [0, 'position'] }, null), (_l()(), i0.ɵted(0, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, 0, 2, 'a', [['class', 'dropdown-item'], ['clrDropdownItem',
                ''], ['href', 'javascript://']], [[2, 'dropdown-item', null]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 39).onDropdownItemClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i13.DropdownItem, [i8.Dropdown, i0.ElementRef, i7.IfOpenService], null, null),
        (_l()(), i0.ɵted(null, ['Shutdown'])), (_l()(), i0.ɵted(0, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, 0, 2, 'a', [['class', 'dropdown-item'], ['clrDropdownItem',
                ''], ['href', 'javascript://']], [[2, 'dropdown-item', null]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 43).onDropdownItemClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i13.DropdownItem, [i8.Dropdown, i0.ElementRef, i7.IfOpenService], null, null),
        (_l()(), i0.ɵted(null, ['Delete'])), (_l()(), i0.ɵted(0, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, 0, 2, 'a', [['class', 'dropdown-item'], ['clrDropdownItem',
                ''], ['href', 'javascript://']], [[2, 'dropdown-item', null]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 47).onDropdownItemClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i13.DropdownItem, [i8.Dropdown, i0.ElementRef, i7.IfOpenService], null, null),
        (_l()(), i0.ɵted(null, ['Reboot'])), (_l()(), i0.ɵted(0, ['\n                '])),
        (_l()(), i0.ɵted(0, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵted(0, ['\n'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Small Alert'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 10, 'clr-alert', [], null, null, null, i1.View_Alert_0, i1.RenderType_Alert)),
        i0.ɵprd(512, null, i2.AlertIconAndTypesService, i2.AlertIconAndTypesService, []), i0.ɵdid(49152, null, 0, i3.Alert, [i2.AlertIconAndTypesService], { isSmall: [0, 'isSmall'] }, null), (_l()(), i0.ɵted(0, ['\n    '])), (_l()(),
            i0.ɵeld(0, null, 0, 5, 'div', [['class', 'alert-item alert-item']], null, null, null, i4.View_AlertItem_0, i4.RenderType_AlertItem)),
        i0.ɵdid(49152, null, 0, i5.AlertItem, [i2.AlertIconAndTypesService], null, null), (_l()(), i0.ɵted(0, ['\n            '])), (_l()(), i0.ɵeld(0, null, 0, 1, 'span', [['class', 'alert-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                This is a small alert.\n            '])), (_l()(), i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵted(0, ['\n'])), (_l()(), i0.ɵted(null, ['\n'])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Alert Types'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 10, 'clr-alert', [], null, null, null, i1.View_Alert_0, i1.RenderType_Alert)), i0.ɵprd(512, null, i2.AlertIconAndTypesService, i2.AlertIconAndTypesService, []), i0.ɵdid(49152, null, 0, i3.Alert, [i2.AlertIconAndTypesService], { alertType: [0, 'alertType'] }, null), (_l()(), i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵeld(0, null, 0, 5, 'div', [['class', 'alert-item alert-item']], null, null, null, i4.View_AlertItem_0, i4.RenderType_AlertItem)), i0.ɵdid(49152, null, 0, i5.AlertItem, [i2.AlertIconAndTypesService], null, null), (_l()(), i0.ɵted(0, ['\n            '])), (_l()(), i0.ɵeld(0, null, 0, 1, 'span', [['class', 'alert-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                This is a default info alert.\n            '])), (_l()(),
            i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵted(0, ['\n'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 10, 'clr-alert', [], null, null, null, i1.View_Alert_0, i1.RenderType_Alert)),
        i0.ɵprd(512, null, i2.AlertIconAndTypesService, i2.AlertIconAndTypesService, []), i0.ɵdid(49152, null, 0, i3.Alert, [i2.AlertIconAndTypesService], { alertType: [0, 'alertType'] }, null), (_l()(), i0.ɵted(0, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, 0, 5, 'div', [['class', 'alert-item alert-item']], null, null, null, i4.View_AlertItem_0, i4.RenderType_AlertItem)),
        i0.ɵdid(49152, null, 0, i5.AlertItem, [i2.AlertIconAndTypesService], null, null), (_l()(), i0.ɵted(0, ['\n            '])), (_l()(), i0.ɵeld(0, null, 0, 1, 'span', [['class', 'alert-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                This alert indicates success.\n            '])), (_l()(),
            i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵted(0, ['\n'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 10, 'clr-alert', [], null, null, null, i1.View_Alert_0, i1.RenderType_Alert)),
        i0.ɵprd(512, null, i2.AlertIconAndTypesService, i2.AlertIconAndTypesService, []), i0.ɵdid(49152, null, 0, i3.Alert, [i2.AlertIconAndTypesService], { alertType: [0, 'alertType'] }, null), (_l()(), i0.ɵted(0, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, 0, 5, 'div', [['class', 'alert-item alert-item']], null, null, null, i4.View_AlertItem_0, i4.RenderType_AlertItem)),
        i0.ɵdid(49152, null, 0, i5.AlertItem, [i2.AlertIconAndTypesService], null, null), (_l()(), i0.ɵted(0, ['\n            '])), (_l()(), i0.ɵeld(0, null, 0, 1, 'span', [['class', 'alert-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                This alert indicates a warning.\n            '])), (_l()(),
            i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵted(0, ['\n'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 10, 'clr-alert', [], null, null, null, i1.View_Alert_0, i1.RenderType_Alert)),
        i0.ɵprd(512, null, i2.AlertIconAndTypesService, i2.AlertIconAndTypesService, []), i0.ɵdid(49152, null, 0, i3.Alert, [i2.AlertIconAndTypesService], { alertType: [0, 'alertType'] }, null), (_l()(), i0.ɵted(0, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, 0, 5, 'div', [['class', 'alert-item alert-item']], null, null, null, i4.View_AlertItem_0, i4.RenderType_AlertItem)),
        i0.ɵdid(49152, null, 0, i5.AlertItem, [i2.AlertIconAndTypesService], null, null), (_l()(), i0.ɵted(0, ['\n            '])), (_l()(), i0.ɵeld(0, null, 0, 1, 'span', [['class', 'alert-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                This alert indicates danger.\n            '])), (_l()(),
            i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵted(0, ['\n'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['App Level Alert'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 16, 'clr-alert', [], null, null, null, i1.View_Alert_0, i1.RenderType_Alert)),
        i0.ɵprd(512, null, i2.AlertIconAndTypesService, i2.AlertIconAndTypesService, []), i0.ɵdid(49152, null, 0, i3.Alert, [i2.AlertIconAndTypesService], { isAppLevel: [0, 'isAppLevel'], alertType: [1, 'alertType'] }, null), (_l()(),
            i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵeld(0, null, 0, 11, 'div', [['class',
                'alert-item alert-item']], null, null, null, i4.View_AlertItem_0, i4.RenderType_AlertItem)), i0.ɵdid(49152, null, 0, i5.AlertItem, [i2.AlertIconAndTypesService], null, null), (_l()(), i0.ɵted(0, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, 0, 1, 'span', [['class', 'alert-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                This is an app level alert.\n            '])), (_l()(),
            i0.ɵted(0, ['\n        '])), (_l()(), i0.ɵeld(0, null, 0, 4, 'div', [['class',
                'alert-actions']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn alert-action']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Fix'])), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵted(0, ['\n    '])), (_l()(), i0.ɵted(0, ['\n'])), (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var currVal_0 = false;
        _ck(_v, 8, 0, currVal_0);
        var currVal_9 = 'bottom-right';
        _ck(_v, 36, 0, currVal_9);
        var currVal_13 = true;
        _ck(_v, 60, 0, currVal_13);
        var currVal_14 = 'alert-info';
        _ck(_v, 75, 0, currVal_14);
        var currVal_15 = 'alert-success';
        _ck(_v, 87, 0, currVal_15);
        var currVal_16 = 'alert-warning';
        _ck(_v, 99, 0, currVal_16);
        var currVal_17 = 'alert-danger';
        _ck(_v, 111, 0, currVal_17);
        var currVal_18 = true;
        var currVal_19 = 'alert-danger';
        _ck(_v, 126, 0, currVal_18, currVal_19);
    }, function (_ck, _v) {
        var currVal_1 = true;
        var currVal_2 = i0.ɵnov(_v, 26).ifOpenService.open;
        _ck(_v, 24, 0, currVal_1, currVal_2);
        var currVal_3 = i0.ɵnov(_v, 29).isRootLevelToggle;
        var currVal_4 = !i0.ɵnov(_v, 29).isRootLevelToggle;
        var currVal_5 = !i0.ɵnov(_v, 29).isRootLevelToggle;
        var currVal_6 = i0.ɵnov(_v, 29).active;
        _ck(_v, 28, 0, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = true;
        var currVal_8 = i0.ɵnov(_v, 36).hidden;
        _ck(_v, 35, 0, currVal_7, currVal_8);
        var currVal_10 = true;
        _ck(_v, 38, 0, currVal_10);
        var currVal_11 = true;
        _ck(_v, 42, 0, currVal_11);
        var currVal_12 = true;
        _ck(_v, 46, 0, currVal_12);
    });
}
export function View_KSAlerts_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_KSAlerts_0, RenderType_KSAlerts)),
        i0.ɵdid(49152, null, 0, i14.KSAlerts, [], null, null)], null, null);
}
export var KSAlertsNgFactory = i0.ɵccf('ng-component', i14.KSAlerts, View_KSAlerts_Host_0, {}, {}, []);
//# sourceMappingURL=alerts.component.ngfactory.js.map