/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '../../../containers/progress/progress-bars.component';
var styles_KSProgressBars = [];
export var RenderType_KSProgressBars = i0.ɵcrt({ encapsulation: 2,
    styles: styles_KSProgressBars, data: {} });
function View_KSProgressBars_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['', '%']))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.value;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_KSProgressBars_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 19, 'div', [['class',
                'col']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i1.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngClass: [0, 'ngClass'] }, null),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 0, 'progress', [['max', '100']], [[8, 'value', 0], [1, 'data-displayval',
                0]], null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_KSProgressBars_2)), i0.ɵdid(16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 4, 'p', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'button', [['class', 'btn btn-outline']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (_v.context.$implicit.start() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), (_l()(), i0.ɵted(null, ['Show'])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.cssClassnames();
        _ck(_v, 6, 0, currVal_1);
        var currVal_4 = _v.context.$implicit.isLabeled;
        _ck(_v, 11, 0, currVal_4);
        var currVal_5 = 'btn btn-outline';
        var currVal_6 = _v.context.$implicit.demoId;
        _ck(_v, 17, 0, currVal_5, currVal_6);
    }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.title;
        _ck(_v, 3, 0, currVal_0);
        var currVal_2 = i0.ɵinlineInterpolate(1, '', _v.context.$implicit.value, '');
        var currVal_3 = (_v.context.$implicit.value + '%');
        _ck(_v, 8, 0, currVal_2, currVal_3);
    });
}
export function View_KSProgressBars_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['Progress Bars'])), (_l()(), i0.ɵted(null, ['\n'])),
        (_l()(), i0.ɵeld(0, null, null, 421, 'div', [['class', 'content-wrapper']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_KSProgressBars_1)), i0.ɵdid(802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 27, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['In Card'])), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵeld(0, null, null, 21, 'div', [['class', 'card']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 12, 'div', [['class', 'card-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 3, 'div', [['class', 'progress top']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'progress', [['max', '100']], [[8, 'value', 0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [['class', 'card-title']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Card title'])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'p', [['class', 'card-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Here is a progress bar at the very top of a card, above the header.'])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'card-footer']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'a', [['class', 'card-link'], ['href',
                    'javascript://']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Click'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 27, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['In Card'])), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵeld(0, null, null, 21, 'div', [['class', 'card']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'card-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'h4', [['class', 'card-title']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Card title'])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'p', [['class', 'card-text']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Here is a progress bar at the top of a card\'s footer, above the buttons.'])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 9, 'div', [['class', 'card-footer']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 3, 'div', [['class', 'progress']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'progress', [['max', '100']], [[8, 'value', 0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [['class', 'card-link'], ['href', 'javascript://']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Click'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 28, 'div', [['class',
                'col']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['In Sidenav'])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 22, 'ul', [['class', 'sidenav list-unstyled col-xs-2']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 7, 'li', [['class', 'nav-item']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'a', [['class', 'nav-link'], ['href',
                    'javascript://']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Link'])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'progress loop']], null, null, null, null, null)), (_l()(), i0.ɵeld(0, null, null, 0, 'progress', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'li', [['class', 'nav-item']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [['class', 'nav-link'], ['href', 'javascript://']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Link'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'li', [['class', 'nav-item']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'a', [['class', 'nav-link'], ['href',
                    'javascript://']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Another link'])), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class',
                'col']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Indeterminate/Looping'])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'progress loop']], null, null, null, null, null)), (_l()(), i0.ɵeld(0, null, null, 0, 'progress', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 15, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Static Progress Bar'])), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'progress-static']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0], [1,
                'data-displayval', 0]], null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 4, 'p', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-outline']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                Load New Values\n            '])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 18, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Labeled, Static Progress Bar'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class',
                'progress-static labeled']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0], [1, 'data-displayval', 0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '%'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 4, 'p', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-outline']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                Load New Values\n            '])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 15, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Red Static Progress Bar'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class',
                'progress-static danger']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0]], null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 4, 'p', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-outline']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                Load New Values\n            '])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 15, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Green Static Progress Bar'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class',
                'progress-static success']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0]], null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 4, 'p', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-outline']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                Load New Values\n            '])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 19, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Simple Layout'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 9, 'div', [['class',
                'progress-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 3, 'div', [['class', 'progress']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'progress', [['max', '100']], [[8, 'value', 0], [1, 'data-displayval', 0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['More text'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 2, 'p', [], null, null, null, null, null)),
        (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-outline']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['Load New Values'])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 40, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 33, 'div', [['class', 'progress-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Complex Layout'])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 24, 'div', [['class', 'progress-group']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'col-xs-6']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Left'])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'col-xs-6 text-right']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Right'])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'progress-static']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0], [1, 'data-displayval',
                0]], null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'col-xs-6']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Left'])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'col-xs-6 text-right']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Right'])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['More text'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵeld(0, null, null, 2, 'p', [], null, null, null, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-outline']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['Load New Values'])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 42, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Complex Layout'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 32, 'div', [['class', 'progress-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 27, 'div', [['class', 'progress-group']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 7, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'col-xs-6']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Left'])), (_l()(),
            i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'col-xs-6 text-right']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Right'])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class', 'progress-static labeled danger']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0], [1, 'data-displayval',
                0]], null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '%'])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'col-xs-6']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Left'])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class', 'col-xs-6 text-right']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Right'])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵeld(0, null, null, 2, 'p', [], null, null, null, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-outline']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['Load New Values'])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 38, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Stacked Layout'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 28, 'div', [['class', 'progress-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 25, 'div', [['class', 'progress-group']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class', 'progress-static labeled danger']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0], [1, 'data-displayval',
                0]], null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '%'])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class', 'progress-static labeled']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0], [1, 'data-displayval',
                0]], null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '%'])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class', 'progress-static labeled success']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0], [1, 'data-displayval',
                0]], null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '%'])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 2, 'p', [], null, null, null, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-outline']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['Load New Values'])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 38, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Stacked and resized layout'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 28, 'div', [['class', 'progress-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 25, 'div', [['class', 'progress-group'],
                ['style', 'font-size: 1px']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class', 'progress-static danger']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value',
                0], [1, 'data-displayval', 0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '%'])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class', 'progress-static']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0], [1, 'data-displayval',
                0]], null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '%'])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class', 'progress-static success']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0], [1, 'data-displayval',
                0]], null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '%'])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 2, 'p', [], null, null, null, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-outline']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['Load New Values'])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 60, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Inline in Card'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 54, 'div', [['class', 'card']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 40, 'div', [['class', 'card-block']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [['class', 'card-title']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Card title'])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'p', [['class', 'card-text']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Here is a progress bar at the very top of a card.'])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 9, 'div', [['class', 'progress-block']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Label'])), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'progress-static']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value', 0]], null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 9, 'div', [['class', 'progress-block']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Longer Label'])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'progress-static']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter']], [[1, 'data-value',
                0]], null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 9, 'div', [['class', 'progress-block']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Really, Really, Really Long Label'])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'progress success']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 0, 'progress', [['max', '100']], [[8, 'value', 0],
            [1, 'data-displayval', 0]], null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 9, 'div', [['class', 'card-footer']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class', 'progress-static top']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'progress-meter'],
            ['data-value', '33']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-sm btn-link']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setNewValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['Click'])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵted(null, ['\n\n\n\n\n\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.examples;
        _ck(_v, 6, 0, currVal_0);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = i0.ɵinlineInterpolate(1, '', _co.value1, '');
        _ck(_v, 19, 0, currVal_1);
        var currVal_2 = i0.ɵinlineInterpolate(1, '', _co.value2, '');
        _ck(_v, 57, 0, currVal_2);
        var currVal_3 = _co.staticProgbarValue;
        var currVal_4 = (_co.staticProgbarValue + '%');
        _ck(_v, 112, 0, currVal_3, currVal_4);
        var currVal_5 = _co.staticLabeledProgbarValue;
        var currVal_6 = (_co.staticLabeledProgbarValue + '%');
        _ck(_v, 129, 0, currVal_5, currVal_6);
        var currVal_7 = _co.staticLabeledProgbarValue;
        _ck(_v, 132, 0, currVal_7);
        var currVal_8 = _co.staticDangerValue;
        _ck(_v, 149, 0, currVal_8);
        var currVal_9 = _co.staticSuccessValue;
        _ck(_v, 166, 0, currVal_9);
        var currVal_10 = i0.ɵinlineInterpolate(1, '', _co.inlineProgress, '');
        var currVal_11 = (_co.inlineProgress + '%');
        _ck(_v, 185, 0, currVal_10, currVal_11);
        var currVal_12 = _co.inlineStaticProgbarValue;
        var currVal_13 = (_co.inlineStaticProgbarValue + '%');
        _ck(_v, 217, 0, currVal_12, currVal_13);
        var currVal_14 = _co.staticLabeledProgbarValue;
        var currVal_15 = (_co.staticLabeledProgbarValue + '%');
        _ck(_v, 261, 0, currVal_14, currVal_15);
        var currVal_16 = _co.staticLabeledProgbarValue;
        _ck(_v, 264, 0, currVal_16);
        var currVal_17 = _co.staticDangerValue;
        var currVal_18 = (_co.staticDangerValue + '%');
        _ck(_v, 294, 0, currVal_17, currVal_18);
        var currVal_19 = _co.staticDangerValue;
        _ck(_v, 297, 0, currVal_19);
        var currVal_20 = _co.staticLabeledProgbarValue;
        var currVal_21 = (_co.staticLabeledProgbarValue + '%');
        _ck(_v, 302, 0, currVal_20, currVal_21);
        var currVal_22 = _co.staticLabeledProgbarValue;
        _ck(_v, 305, 0, currVal_22);
        var currVal_23 = _co.staticSuccessValue;
        var currVal_24 = (_co.staticSuccessValue + '%');
        _ck(_v, 310, 0, currVal_23, currVal_24);
        var currVal_25 = _co.staticSuccessValue;
        _ck(_v, 313, 0, currVal_25);
        var currVal_26 = _co.staticDangerValue;
        var currVal_27 = (_co.staticDangerValue + '%');
        _ck(_v, 334, 0, currVal_26, currVal_27);
        var currVal_28 = _co.staticDangerValue;
        _ck(_v, 337, 0, currVal_28);
        var currVal_29 = _co.staticLabeledProgbarValue;
        var currVal_30 = (_co.staticLabeledProgbarValue + '%');
        _ck(_v, 342, 0, currVal_29, currVal_30);
        var currVal_31 = _co.staticLabeledProgbarValue;
        _ck(_v, 345, 0, currVal_31);
        var currVal_32 = _co.staticSuccessValue;
        var currVal_33 = (_co.staticSuccessValue + '%');
        _ck(_v, 350, 0, currVal_32, currVal_33);
        var currVal_34 = _co.staticSuccessValue;
        _ck(_v, 353, 0, currVal_34);
        var currVal_35 = _co.value1;
        _ck(_v, 385, 0, currVal_35);
        var currVal_36 = _co.value2;
        _ck(_v, 396, 0, currVal_36);
        var currVal_37 = i0.ɵinlineInterpolate(1, '', _co.value3, '');
        var currVal_38 = (_co.value3 + '%');
        _ck(_v, 407, 0, currVal_37, currVal_38);
    });
}
export function View_KSProgressBars_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_KSProgressBars_0, RenderType_KSProgressBars)), i0.ɵdid(114688, null, 0, i2.KSProgressBars, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var KSProgressBarsNgFactory = i0.ɵccf('ng-component', i2.KSProgressBars, View_KSProgressBars_Host_0, {}, {}, []);
//# sourceMappingURL=progress-bars.component.ngfactory.js.map