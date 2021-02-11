/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import {
  addAttributeValue,
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
import { CdsNavigationHeader } from '@cds/core/navigation/navigation-header.element';
import { CdsNavigationItem } from '@cds/core/navigation/navigation-item.element';

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

  @querySlot('cds-navigation-header', { assign: 'cds-navigation-header' })
  protected navigationHeader: CdsNavigationHeader;

  @querySlotAll('cds-navigation-item', { assign: 'cds-navigation-item' }) protected navigationItems: NodeListOf<
    CdsNavigationItem
  >;

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
  @property({ type: Boolean })
  expanded: boolean;

  @event() protected expandedChange: EventEmitter<boolean>;

  @i18n() i18n = I18nService.keys.navigation;

  private toggle() {
    console.log('header click');
    this.expanded ? this.removeAttribute('expanded') : this.setAttribute('expanded', '');
    this.expandedChange.emit(!this.expanded);
  }

  protected getLayoutTemplate(layout: NavigationLayout) {
    switch (layout) {
      case 'horizontal':
        this.setAttribute('expanded', '');
        return html`<slot name="cds-navigation-item"></slot>`;
      default:
        // vertical
        return html`
          <header cds-layout="horizontal align:fill">
            <cds-button @click="${() => this.toggle()}" action="flat" cds-layout="horizontal align:fill p:none">
              <slot name="cds-navigation-header"></slot>
            </cds-button>
          </header>
          <slot name="cds-navigation-item"></slot>
        `;
    }
  }

  render() {
    return html` <nav
      class="private-host"
      role="navigation"
      aria-label="${this.i18n.navigationLabel}"
      aria-expanded="${this.expanded}"
      cds-layout="${this.layout ? this.layout : 'vertical'} wrap:none gap:md"
    >
      ${this.getLayoutTemplate(this.layout)}
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
  }

  firstUpdated(props: Map<string, any>) {
    super.updated(props);

    // This will get more complicated when drawer layout is added
    addAttributeValue(
      this,
      'cds-layout',
      `${this.layout === 'horizontal' ? 'horizontal gap:md wrap:none' : 'vertical wrap:none gap:md'}`
    );
    this.updateChildrenProps();
  }

  updated() {
    this.updateChildrenProps();
  }
}
