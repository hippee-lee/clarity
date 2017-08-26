/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '../../node_modules/clarity-angular/popover/dropdown/dropdown-menu.ngfactory';
import * as i2 from 'clarity-angular/popover/dropdown/dropdown-menu';
import * as i3 from 'clarity-angular/popover/dropdown/dropdown-item';
import * as i4 from 'clarity-angular/popover/dropdown/dropdown';
import * as i5 from 'clarity-angular/utils/conditional/if-open.service';
import * as i6 from '../../node_modules/clarity-angular/popover/dropdown/dropdown.ngfactory';
import * as i7 from 'clarity-angular/popover/dropdown/dropdown-trigger';
import * as i8 from 'clarity-angular/icon/icon';
import * as i9 from 'clarity-angular/utils/conditional/if-open.directive';
import * as i10 from '../../../containers/cards/cards.component';
var styles_KSCards = [];
export var RenderType_KSCards = i0.ɵcrt({ encapsulation: 2, styles: styles_KSCards,
    data: {} });
function View_KSCards_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 53, 'clr-dropdown-menu', [['clrPosition', 'top-right']], [[2, 'dropdown-menu', null], [4, 'visibility',
                null]], null, null, i1.View_DropdownMenu_0, i1.RenderType_DropdownMenu)),
        i0.ɵdid(8568832, null, 0, i2.DropdownMenu, [i0.Injector, [1, i0.ElementRef],
            [3, i2.DropdownMenu]], { position: [0, 'position'] }, null), (_l()(), i0.ɵted(0, ['\n                        '])), (_l()(), i0.ɵeld(0, null, 0, 1, 'label', [['class', 'dropdown-header']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Dropdown header'])),
        (_l()(), i0.ɵted(0, ['\n                        '])), (_l()(), i0.ɵeld(0, null, 0, 2, 'button', [['clrDropdownItem', ''], ['type', 'button']], [[2, 'dropdown-item',
                null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 7).onDropdownItemClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i3.DropdownItem, [i4.Dropdown, i0.ElementRef, i5.IfOpenService], null, null),
        (_l()(), i0.ɵted(null, ['Action 1'])), (_l()(), i0.ɵted(0, ['\n                        '])),
        (_l()(), i0.ɵeld(0, null, 0, 2, 'button', [['clrDropdownItem', ''], ['disabled',
                ''], ['type', 'button']], [[2, 'dropdown-item', null]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 11).onDropdownItemClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i3.DropdownItem, [i4.Dropdown, i0.ElementRef, i5.IfOpenService], null, null),
        (_l()(), i0.ɵted(null, ['Disabled Action'])), (_l()(), i0.ɵted(0, ['\n                        '])),
        (_l()(), i0.ɵeld(0, null, 0, 0, 'div', [['class', 'dropdown-divider']], null, null, null, null, null)), (_l()(), i0.ɵted(0, ['\n                        '])), (_l()(), i0.ɵeld(0, null, 0, 32, 'clr-dropdown', [], [[2, 'dropdown', null], [2, 'open', null]], null, null, i6.View_Dropdown_0, i6.RenderType_Dropdown)), i0.ɵprd(512, null, i5.IfOpenService, i5.IfOpenService, []), i0.ɵdid(49152, null, 0, i4.Dropdown, [[3, i4.Dropdown], i5.IfOpenService], null, null),
        (_l()(), i0.ɵted(0, ['\n                            '])), (_l()(), i0.ɵeld(0, null, 0, 2, 'button', [['clrDropdownTrigger', ''], ['type', 'button']], [[2, 'dropdown-toggle',
                null], [2, 'dropdown-item', null], [2, 'expandable', null],
            [2, 'active', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 21).onDropdownTriggerClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i7.DropdownTrigger, [i4.Dropdown, i5.IfOpenService], null, null), (_l()(), i0.ɵted(null, ['Link 1'])), (_l()(), i0.ɵted(0, ['\n                            '])), (_l()(),
            i0.ɵeld(0, null, 0, 23, 'clr-dropdown-menu', [], [[2, 'dropdown-menu',
                    null], [4, 'visibility', null]], null, null, i1.View_DropdownMenu_0, i1.RenderType_DropdownMenu)), i0.ɵdid(8568832, null, 0, i2.DropdownMenu, [i0.Injector, [1, i0.ElementRef], [3, i2.DropdownMenu]], null, null), (_l()(), i0.ɵted(0, ['\n                                '])),
        (_l()(), i0.ɵeld(0, null, 0, 2, 'button', [['clrDropdownItem', ''], ['type',
                'button']], [[2, 'dropdown-item', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 28).onDropdownItemClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i3.DropdownItem, [i4.Dropdown, i0.ElementRef, i5.IfOpenService], null, null),
        (_l()(), i0.ɵted(null, ['Foo'])), (_l()(), i0.ɵted(0, ['\n                                '])),
        (_l()(), i0.ɵeld(0, null, 0, 15, 'clr-dropdown', [], [[2, 'dropdown',
                null], [2, 'open', null]], null, null, i6.View_Dropdown_0, i6.RenderType_Dropdown)), i0.ɵprd(512, null, i5.IfOpenService, i5.IfOpenService, []), i0.ɵdid(49152, null, 0, i4.Dropdown, [[3, i4.Dropdown],
            i5.IfOpenService], null, null), (_l()(), i0.ɵted(0, ['\n                                    '])),
        (_l()(), i0.ɵeld(0, null, 0, 2, 'button', [['clrDropdownTrigger', ''], ['type',
                'button']], [[2, 'dropdown-toggle', null], [2, 'dropdown-item', null],
            [2, 'expandable', null], [2, 'active', null]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 36).onDropdownTriggerClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i7.DropdownTrigger, [i4.Dropdown, i5.IfOpenService], null, null), (_l()(), i0.ɵted(null, ['Bar'])), (_l()(), i0.ɵted(0, ['\n                                    '])),
        (_l()(), i0.ɵeld(0, null, 0, 6, 'clr-dropdown-menu', [['clrPosition', 'left-top']], [[2, 'dropdown-menu', null], [4, 'visibility', null]], null, null, i1.View_DropdownMenu_0, i1.RenderType_DropdownMenu)), i0.ɵdid(8568832, null, 0, i2.DropdownMenu, [i0.Injector, [1, i0.ElementRef], [3, i2.DropdownMenu]], { position: [0, 'position'] }, null), (_l()(), i0.ɵted(0, ['\n                                        '])),
        (_l()(), i0.ɵeld(0, null, 0, 2, 'button', [['clrDropdownItem', ''], ['type',
                'button']], [[2, 'dropdown-item', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 43).onDropdownItemClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i3.DropdownItem, [i4.Dropdown, i0.ElementRef, i5.IfOpenService], null, null),
        (_l()(), i0.ɵted(null, ['Baz'])), (_l()(), i0.ɵted(0, ['\n                                    '])),
        (_l()(), i0.ɵted(0, ['\n                                '])), (_l()(), i0.ɵted(0, ['\n                            '])), (_l()(), i0.ɵted(0, ['\n                        '])),
        (_l()(), i0.ɵted(0, ['\n                        '])), (_l()(), i0.ɵeld(0, null, 0, 2, 'button', [['clrDropdownItem', ''], ['type', 'button']], [[2, 'dropdown-item',
                null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 51).onDropdownItemClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i3.DropdownItem, [i4.Dropdown, i0.ElementRef, i5.IfOpenService], null, null),
        (_l()(), i0.ɵted(null, ['Link 2'])), (_l()(), i0.ɵted(0, ['\n                    ']))], function (_ck, _v) {
        var currVal_2 = 'top-right';
        _ck(_v, 1, 0, currVal_2);
        var currVal_22 = 'left-top';
        _ck(_v, 40, 0, currVal_22);
    }, function (_ck, _v) {
        var currVal_0 = true;
        var currVal_1 = i0.ɵnov(_v, 1).hidden;
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_3 = true;
        _ck(_v, 6, 0, currVal_3);
        var currVal_4 = true;
        _ck(_v, 10, 0, currVal_4);
        var currVal_5 = true;
        var currVal_6 = i0.ɵnov(_v, 18).ifOpenService.open;
        _ck(_v, 16, 0, currVal_5, currVal_6);
        var currVal_7 = i0.ɵnov(_v, 21).isRootLevelToggle;
        var currVal_8 = !i0.ɵnov(_v, 21).isRootLevelToggle;
        var currVal_9 = !i0.ɵnov(_v, 21).isRootLevelToggle;
        var currVal_10 = i0.ɵnov(_v, 21).active;
        _ck(_v, 20, 0, currVal_7, currVal_8, currVal_9, currVal_10);
        var currVal_11 = true;
        var currVal_12 = i0.ɵnov(_v, 25).hidden;
        _ck(_v, 24, 0, currVal_11, currVal_12);
        var currVal_13 = true;
        _ck(_v, 27, 0, currVal_13);
        var currVal_14 = true;
        var currVal_15 = i0.ɵnov(_v, 33).ifOpenService.open;
        _ck(_v, 31, 0, currVal_14, currVal_15);
        var currVal_16 = i0.ɵnov(_v, 36).isRootLevelToggle;
        var currVal_17 = !i0.ɵnov(_v, 36).isRootLevelToggle;
        var currVal_18 = !i0.ɵnov(_v, 36).isRootLevelToggle;
        var currVal_19 = i0.ɵnov(_v, 36).active;
        _ck(_v, 35, 0, currVal_16, currVal_17, currVal_18, currVal_19);
        var currVal_20 = true;
        var currVal_21 = i0.ɵnov(_v, 40).hidden;
        _ck(_v, 39, 0, currVal_20, currVal_21);
        var currVal_23 = true;
        _ck(_v, 42, 0, currVal_23);
        var currVal_24 = true;
        _ck(_v, 50, 0, currVal_24);
    });
}
export function View_KSCards_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 154, 'div', [['class',
                'content-wrapper']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 43, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Dropdown Action'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵeld(0, null, null, 37, 'div', [['class', 'card']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'card-header']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                Header\n            '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'card-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'card-title']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    Block\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'card-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                    Molestias officiis temporibus quod inventore, minus commodi\n                    similique corrupti repellat saepe facere aliquam minima\n                    deserunt esse nemo, vel illum optio necessitatibus deleniti.\n                '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 22, 'div', [['class', 'card-footer']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-sm btn-link']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    Action 1\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-sm btn-link']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    Action 2\n                '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 13, 'clr-dropdown', [], [[2, 'dropdown', null], [2, 'open', null]], null, null, i6.View_Dropdown_0, i6.RenderType_Dropdown)),
        i0.ɵprd(512, null, i5.IfOpenService, i5.IfOpenService, []), i0.ɵdid(49152, null, 0, i4.Dropdown, [[3, i4.Dropdown], i5.IfOpenService], null, null), (_l()(), i0.ɵted(0, ['\n                    '])), (_l()(), i0.ɵeld(0, null, 0, 5, 'button', [['class', 'btn btn-outline-primary'], ['clrDropdownTrigger',
                ''], ['type', 'button']], [[2, 'dropdown-toggle', null], [2, 'dropdown-item',
                null], [2, 'expandable', null], [2, 'active', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 34).onDropdownTriggerClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i7.DropdownTrigger, [i4.Dropdown, i5.IfOpenService], null, null), (_l()(), i0.ɵted(null, ['\n                        Dropdown\n                        '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'clr-icon', [['shape', 'caret down']], null, null, null, null, null)),
        i0.ɵdid(16384, null, 0, i8.IconCustomTag, [], null, null),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(0, ['\n                    '])), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_KSCards_1)), i0.ɵdid(147456, null, 0, i9.IfOpenDirective, [i5.IfOpenService, i0.TemplateRef, i0.ViewContainerRef], { open: [0, 'open'] }, null), (_l()(), i0.ɵted(0, ['\n                '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 18, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Clickable w/ Image'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 12, 'a', [['class',
                'card clickable'], ['href', 'javascript://']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'card-img']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'img', [['src', 'assets/placeholder_480x200.png']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'card-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'p', [['class', 'card-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur magnam eos\n                    amet sit rem. Ipsam maiores incidunt eum quasi enim! Corporis sunt nisi totam molestias\n                    quam commodi maxime mollitia.\n                '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n\n    '])), (_l()(), i0.ɵeld(0, null, null, 18, 'div', [['class',
                'col']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Clickable'])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 12, 'a', [['class', 'card clickable'], ['href', 'javascript://']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'card-img']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'img', [['alt', 'Example of an Image in a Card'], ['src', 'assets/placeholder_350x150.png']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'card-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'p', [['class', 'card-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur magnam eos\n                    amet sit rem. Ipsam maiores incidunt eum quasi enim! Corporis sunt nisi totam molestias\n                    quam commodi maxime mollitia.\n                '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n\n    '])), (_l()(), i0.ɵeld(0, null, null, 28, 'div', [['class',
                'col']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Card Actions'])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 22, 'div', [['class', 'card']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'card-header']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                Header\n            '])), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'card-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'card-title']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    Block\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'card-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    Card content can contain text, links, images, data visualizations,\n                    lists and more.\n                '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'card-footer']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-sm btn-link']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Footer Action 1'])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-sm btn-link']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Footer Action 2'])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 36, 'div', [['class',
                'col']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Card Image'])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 30, 'div', [['class', 'card']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'card-header']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                Header\n            '])), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 18, 'div', [['class', 'card-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 12, 'div', [['class', 'card-media-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'img', [['src', 'assets/placeholder_60x60.png']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'card-media-description']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'card-media-title']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                                Project A\n                            '])),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'card-media-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                                Owner: John Doe\n                            '])),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'card-text']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore\n                    explicabo temporibus, enim voluptate saepe corrupti illum earum eveniet ab\n                    veniam vel nisi fugit accusantium perferendis quas facilis quod.\n                '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'card-footer']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-sm btn-link']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Action'])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵted(null, ['\n\n\n']))], function (_ck, _v) {
        var currVal_6 = null;
        _ck(_v, 41, 0, currVal_6);
    }, function (_ck, _v) {
        var currVal_0 = true;
        var currVal_1 = i0.ɵnov(_v, 31).ifOpenService.open;
        _ck(_v, 29, 0, currVal_0, currVal_1);
        var currVal_2 = i0.ɵnov(_v, 34).isRootLevelToggle;
        var currVal_3 = !i0.ɵnov(_v, 34).isRootLevelToggle;
        var currVal_4 = !i0.ɵnov(_v, 34).isRootLevelToggle;
        var currVal_5 = i0.ɵnov(_v, 34).active;
        _ck(_v, 33, 0, currVal_2, currVal_3, currVal_4, currVal_5);
    });
}
export function View_KSCards_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_KSCards_0, RenderType_KSCards)),
        i0.ɵdid(49152, null, 0, i10.KSCards, [], null, null)], null, null);
}
export var KSCardsNgFactory = i0.ɵccf('ng-component', i10.KSCards, View_KSCards_Host_0, {}, {}, []);
//# sourceMappingURL=cards.component.ngfactory.js.map