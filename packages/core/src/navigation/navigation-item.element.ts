/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import { baseStyles, i18n, I18nService, internalProperty, property, querySlot } from '@cds/core/internal';
import { styles } from './navigation-item.element.css.js';
import { NavigationLayout } from '@cds/core/navigation/utils/interfaces';
import { defaultNavigationLayout } from '@cds/core/navigation/utils';

/**
 * Web component modal.
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation>
 *
 * </cds-navigation
 * ```
 *
 * @element cds-navigation-item
 * @slot
 */
export class CdsNavigationItem extends LitElement {
  static get styles() {
    return [baseStyles, styles];
  }

  @i18n() i18n = I18nService.keys.navigation;

  @querySlot('cds-icon', { assign: 'item-icon' }) protected itemIcon: HTMLLabelElement;

  // TODO: can this handle default icon projection? Look at shijirs PR for usage in the pagination component

  // private get defaultIconTemplate() {
  //   return html` <cds-icon shape="link" direction="left" size="md"></cds-icon> `;
  // }

  @property({ type: Boolean }) expanded = false;

  @internalProperty({ type: String }) layout: NavigationLayout = defaultNavigationLayout;

  render() {
    return html`
      <span cds-layout="${this.layout} wrap:none no-scrolling">
        <slot></slot>
      </span>
    `;
  }
}
