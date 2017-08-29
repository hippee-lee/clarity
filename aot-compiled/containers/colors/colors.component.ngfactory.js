/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './colors.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '../../../containers/colors/colors.component';
var styles_KSColors = [i0.styles];
export var RenderType_KSColors = i1.ɵcrt({ encapsulation: 0, styles: styles_KSColors,
    data: {} });
function View_KSColors_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 0, 'div', [['class',
                'card-swatch-divider']], null, null, null, null, null))], null, null);
}
function View_KSColors_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['A']))], null, null);
}
function View_KSColors_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 13, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n                    '])), (_l()(), i1.ɵeld(0, null, null, 10, 'p', [['class', 'card-swatch']], [[4, 'background-color',
                null], [2, 'dark-text', null], [2, 'upsize', null]], null, null, null, null)), (_l()(), i1.ɵted(null, ['\n                        '])), (_l()(), i1.ɵeld(0, null, null, 3, 'span', [['class', 'hex-contrast']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['A'])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_KSColors_5)),
        i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n                        '])),
        (_l()(), i1.ɵeld(0, null, null, 2, 'span', [['class', 'rgb-value']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['', ''])), i1.ɵppd(1), (_l()(), i1.ɵted(null, ['\n                    '])), (_l()(), i1.ɵted(null, ['\n                ']))], function (_ck, _v) {
        var currVal_3 = (_v.parent.context.$implicit.text === 'mid');
        _ck(_v, 7, 0, currVal_3);
    }, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.value;
        var currVal_1 = (_v.parent.context.$implicit.text === 'dark');
        var currVal_2 = !!_v.parent.context.$implicit.corePalette;
        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        var currVal_4 = i1.ɵunv(_v, 10, 0, _ck(_v, 11, 0, i1.ɵnov(_v.parent.parent.parent, 0), _v.parent.context.$implicit.value));
        _ck(_v, 10, 0, currVal_4);
    });
}
function View_KSColors_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n                '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_KSColors_3)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n                '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_KSColors_4)),
        i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n            ']))], function (_ck, _v) {
        var currVal_0 = (_v.context.$implicit.value === 'divider');
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = (_v.context.$implicit.value !== 'divider');
        _ck(_v, 6, 0, currVal_1);
    }, null);
}
function View_KSColors_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class',
                'col-sm-6 col-md-4 col-xs-12']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'card card-block card-swatch-block']], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_KSColors_2)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.colors;
        _ck(_v, 5, 0, currVal_0);
    }, null);
}
export function View_KSColors_0(_l) {
    return i1.ɵvid(0, [i1.ɵpid(0, i2.UpperCasePipe, []), (_l()(), i1.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Colors here'])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Color Palettes'])), (_l()(),
            i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'content-wrapper']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_KSColors_1)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.palettes;
        _ck(_v, 10, 0, currVal_0);
    }, null);
}
export function View_KSColors_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_KSColors_0, RenderType_KSColors)),
        i1.ɵdid(49152, null, 0, i3.KSColors, [], null, null)], null, null);
}
export var KSColorsNgFactory = i1.ɵccf('ng-component', i3.KSColors, View_KSColors_Host_0, {}, {}, []);
//# sourceMappingURL=colors.component.ngfactory.js.map