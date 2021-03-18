/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import { baseStyles, i18n, I18nService, internalProperty, property, querySlot } from '@cds/core/internal';
import { styles } from './navigation-header.element.css.js';
import { NavigationLayout } from '@cds/core/navigation/utils/interfaces';
import { defaultNavigationLayout } from '@cds/core/navigation/utils';
import { CdsIcon } from '@cds/core/icon';

/**
 * Web component modal.
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-header>
 *
 * </cds-navigation-header>
 * ```
 *
 * @element cds-navigation-header
 * @slot
 */
export class CdsNavigationHeader extends LitElement {
  @property({ type: Boolean }) expanded = false;
  // TODO: React issue for expanded="false" ???
  @internalProperty({ type: String }) layout: NavigationLayout = defaultNavigationLayout;
  @i18n() i18n = I18nService.keys.navigation;
  @querySlot('cds-icon', { assign: 'cds-icon-slot' }) protected headerIcon: CdsIcon;
  @querySlot('span', { assign: 'header-text' }) protected headerText: HTMLSpanElement;

  render() {
    return html`
      <div class="private-host" cds-layout="horizontal align:vertical-center">
        <span cds-layout="${this.expanded ? '' : 'display:screen-reader-only'}">
          <slot></slot>
        </span>
        <span cds-layout="align:right">
          <slot name="cds-icon-slot">
            ${this.headerIcon
              ? ''
              : html`<cds-icon cds-layout="align:right" shape="angle" direction="${this.expanded ? 'left' : 'right'}">
                </cds-icon>`}
          </slot>
        </span>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
