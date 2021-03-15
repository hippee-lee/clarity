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
// import { CdsIcon } from '@cds/core/icon';

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
  @internalProperty({ type: String }) layout: NavigationLayout = defaultNavigationLayout;
  @i18n() i18n = I18nService.keys.navigation;
  @querySlot('cds-icon', { assign: 'header-icon' }) protected headerIcon: CdsIcon;

  private get defaultIconTemplate() {
    return html` <cds-icon shape="angle" direction="${this.expanded ? 'left' : 'right'}" size="md"></cds-icon> `;
  }

  protected getLayoutTemplate() {
    // do not put headers into horizontal navigation
    if (this.layout === 'horizontal') {
      return '';
    }
    //      <!--<span cds-layout="${this.textlayout}"> -->
    return html` <cds-button action="flat" cds-layout="horizontal">
      <span>
        <slot></slot>
      </span>
      <span cds-layout="${this.expanded ? 'align:right' : 'align:horizontal-center'}">
        ${this.headerIcon ? html`<slot name="header-icon"></slot>` : this.defaultIconTemplate}
      </span>
    </cds-button>`;
  }

  // TODO try adding defaultIconTemplate inside the slot so that

  // TODO: Need to differentiate between top level headers and group level headers.

  protected get textLayout(): string {
    return (this.expanded && this.isNavigationHeader()) || (this.expanded && this.isNestedGroup())
      ? ''
      : 'display:screen-reader-only';
  }

  isNestedGroup() {
    const parent = this.parentElement?.tagName;
    console.log('group parent', parent === 'CDS-NAVIGATION-GROUP');
    return parent === 'CDS-NAVIGATION-GROUP';
  }

  isNavigationHeader() {
    const hasNavigationHeader = this.parentElement?.tagName;
    return hasNavigationHeader === 'CDS-NAVIGATION';
  }

  render() {
    // TODO(matthew): fix this tempalate for horizontal and vertical with default toggle icon
    return this.getLayoutTemplate();
    // return html`
    //   <div class="private-host" cds-layout="horizontal">
    //     <slot></slot>
    //   </div>
    // `;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
