/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit-element';
import {
  // addAttributeValue,
  baseStyles,
  event,
  EventEmitter,
  i18n,
  I18nService,
  property,
  querySlot,
  querySlotAll,
  syncProps,
} from '@cds/core/internal';
import { styles } from './navigation.element.css.js';

import { defaultNavigationLayout } from './utils/index';
import { NavigationLayout } from './utils/interfaces';
import { CdsNavigationGroup } from '@cds/core/navigation/navigation-group.element';
import { CdsNavigationHeader } from '@cds/core/navigation/navigation-header.element';
import { CdsNavigationItem } from '@cds/core/navigation/navigation-item.element';
import { CdsDivider } from '@cds/core/divider/index.js';

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
 * @element cds-navigation
 * @slot
 */
export class CdsNavigation extends LitElement {
  static get styles() {
    return [baseStyles, styles];
  }

  // The specific child selector prevents grabbing headers nested in a group element.
  // No assignment means it goes into the default slot.
  @querySlot('cds-navigation > cds-navigation-header', { assign: 'cds-navigation-header' })
  protected navigationHeader: CdsNavigationHeader;

  @querySlotAll('cds-navigation > cds-navigation-item')
  protected navigationItems: NodeListOf<CdsNavigationItem>;

  @querySlotAll('cds-navigation > cds-divider')
  protected dividers: NodeListOf<CdsDivider>;

  @querySlotAll('cds-navigation > cds-navigation-group')
  protected navigationGroups: NodeListOf<CdsNavigationGroup>;

  /**
   * @type {horizontal | vertical | drawer}
   * Set the layout for the navigation pattern. All items will flow in the direction of the host container.
   * Drawer layout is the `responsive` solution for the navigation component.
   */
  @property({ type: String }) layout: NavigationLayout = defaultNavigationLayout;

  /**
   * @type {boolean}
   * Set the width of a navigation element to show icon + text when expanded or icon only when not expanded.
   */
  // React may have issues with boolean attributes that are used to add functionality
  // react does expanded="true" and expanded="false" -> false is the issue because now we have to look at the boolean value.
  //
  @property({ type: Boolean })
  expanded: boolean;

  @event() protected expandedChange: EventEmitter<boolean>;

  @i18n() i18n = I18nService.keys.navigation;

  private toggle() {
    this.expanded ? this.removeAttribute('expanded') : this.setAttribute('expanded', '');
    this.expandedChange.emit(!this.expanded);
  }

  // TODO: Can I use this form instead?
  // protected get headerTemplate() {
  //   if (!this.navigationHeader) {
  //     return '';
  //   }
  //
  //   return html`
  //     ${this.layout === 'vertical' || '' // default axis
  //     ? html`
  //           <header class="navigation-header" cds-layout="vertical">
  //             <cds-button @click="${() => this.toggle()}" action="flat">
  //               <slot name="cds-navigation-header"></slot>
  //             </cds-button>
  //             <slot name="cds-navigation-subheader"></slot>
  //           </header>
  //         `
  //     : html`
  //           <div cds-layout="horizontal">
  //             <slot name="cds-navigation-header"></slot>
  //           </div>
  //         `}
  //   `;
  // }

  protected get headerTemplate() {
    if (this.navigationHeader) {
      return html`
        ${this.layout === 'vertical' || '' // default axis
          ? html`
              <header class="navigation-header">
                <cds-button @click="${() => this.toggle()}" action="flat" cds-layout="horizontal align:fill p:none">
                  <slot name="cds-navigation-header"></slot>
                </cds-button>
              </header>
            `
          : html`
              <div cds-layout="horizontal align:fill p:none">
                <slot name="cds-navigation-header"></slot>
              </div>
            `}
      `;
    } else {
      return '';
    }
  }

  // Add a named slot for a header like sticky area to put search input into
  render() {
    return html`<nav
      class="private-host"
      role="navigation"
      aria-label="${this.i18n.navigationLabel}"
      aria-expanded="${this.expanded}"
      cds-layout="${this.layout ? this.layout : 'vertical'} wrap:none gap:md"
    >
      ${this.headerTemplate}
      <div
        class="navigation-body"
        cds-layout="${this.layout} wrap:none ${this.layout === 'horizontal' ? 'align:vertical-center' : ''}"
      >
        <slot></slot>
      </div>
      <footer
        cds-layout="${this.layout ? this.layout : 'vertical'} ${this.layout === 'horizontal'
          ? 'align:vertical-center'
          : ''} wrap:none gap:md"
      >
        <slot name="cds-navigation-footer"></slot>
      </footer>
    </nav>`;
  }

  updateChildrenProps() {
    if (this.navigationHeader) {
      syncProps(this.navigationHeader, this, {
        layout: true,
        expanded: this.expanded === !!this.expanded,
      });
    }
    if (this.navigationItems.length > 0) {
      this.navigationItems.forEach(item => {
        syncProps(item, this, {
          layout: true,
          expanded: this.expanded === !!this.expanded,
        });
      });
    }
    if (this.navigationGroups.length > 0) {
      this.navigationGroups.forEach(item => {
        syncProps(item, this, {
          layout: true,
        });
      });
    }
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);
    this.updateChildrenProps();
  }
}
