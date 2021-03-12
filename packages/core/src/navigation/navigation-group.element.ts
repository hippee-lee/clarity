/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import {
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
import { styles } from './navigation-group.element.css.js';
import { NavigationLayout } from '@cds/core/navigation/utils/interfaces';
import { defaultNavigationLayout } from '@cds/core/navigation/utils';
import { CdsNavigationItem } from '@cds/core/navigation/navigation-item.element';
import { CdsNavigationHeader } from '@cds/core/navigation/navigation-header.element';
import { addAttributeValue } from '@cds/core/internal';
import { setOrRemoveAttribute } from '@cds/core/internal';

/**
 * Web component modal.
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-group>
 *
 * </cds-navigation-group>
 * ```
 *
 * @element cds-navigation-group
 * @slot
 */
export class CdsNavigationGroup extends LitElement {
  static get styles() {
    return [baseStyles, styles];
  }

  @i18n() i18n = I18nService.keys.navigation;

  @querySlot('cds-navigation-header', { assign: 'group-header' })
  protected groupHeader: CdsNavigationHeader;

  // ReaCT HAS ISSUES WITH EXPANDED="FALSE"
  @property({ type: Boolean })
  expanded: boolean;

  @event() protected expandedChange: EventEmitter<boolean>;

  // Can make this @internalPrioperty instead
  @property({ type: String }) layout: NavigationLayout = defaultNavigationLayout;

  // Weird, its like the group inherits the named slot from parent.
  @querySlotAll('cds-navigation-item', { assign: 'group-items' })
  protected groupItems: NodeListOf<CdsNavigationItem>;

  @querySlotAll('cds-navigation-group > cds-navigation-group', { assign: 'group-items' })
  protected nestedGroup: NodeListOf<CdsNavigationItem>;

  private toggle() {
    setOrRemoveAttribute(this, ['expanded', ''], () => {
      console.log('setOrRemoveAttr??');
      return !this.expanded;
    });
    this.expandedChange.emit(!this.expanded);
  }

  // TODO(matthew): turn into a utility since this is done in two places?
  protected get headerTemplate() {
    if (this.groupHeader) {
      // TODO(matthew): do I need to do something special to import the core button styles?
      return html`
        ${this.layout === 'vertical' || '' // default axis
          ? html`
              <header class="navigation-group-header">
                <cds-button @click="${() => this.toggle()}" action="flat" cds-layout="horizontal align:fill p:none">
                  <slot name="group-header"></slot>
                </cds-button>
              </header>
            `
          : html``}
      `;
    } else {
      return '';
    }
  }

  protected get horizontalItems() {
    return html` <div class="navigation-group-items" cds-layout="horizontal gap:md wrap:none align:vertical-center">
      <!-- why does this inherit the parental slot name?? -->
      <slot name="group-items"></slot>
    </div>`;
  }

  protected get verticalItems() {
    return html` <div class="navigation-group-items" cds-layout="vertical gap:md">
      <!-- why does this inherit the parental slot name?? -->
      <slot name="group-items"></slot>
    </div>`;
  }

  render() {
    return html`
      <div
        class="private-host"
        cds-layout="${this.layout ? this.layout : 'horizontal'} ${this.layout === 'horizontal'
          ? 'align:horizontal-fill'
          : ''} wrap:none gap:md"
      >
        ${this.headerTemplate} ${this.layout === 'horizontal' ? this.horizontalItems : this.verticalItems}
      </div>
    `;
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    // TODO(matthew): what is the core stance on handling this behavior? Do it dfor hte app or document it and put onus on consumer to add expanded for vertical groups?
    if (this.layout === 'horizontal') {
      // do setAttributes here instead
      addAttributeValue(this, 'expanded', '');
    }

    if (this.nestedGroup.length > 0) {
      this.nestedGroup.forEach(item => {
        syncProps(item, this, {
          layout: true,
        });
      });
    }
  }
}
