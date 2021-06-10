/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import {
  baseStyles,
  createId,
  event,
  EventEmitter,
  i18n,
  I18nService,
  state,
  property,
  querySlot,
  querySlotAll,
  setAttributes,
  spanWrapper,
  addSpanClass,
} from '@cds/core/internal';
import styles from './navigation-item.element.scss';
import { manageScreenReaderElements, NAVIGATION_ITEM_TEXT } from './utils/index.js';
import { CdsIcon } from '@cds/core/icon';
import { FocusableItem, NavigationFocusState } from './interfaces/navigation.interfaces.js';

export const CdsNavigationItemTagName = 'cds-navigation-item';

/**
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 *  <cds-navigation-item><a href="/home">Home</cds-navigation-item>
 * ```
 *
 * @beta
 * @element cds-navigation-item
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --padding
 * @slot
 */
export class CdsNavigationItem extends LitElement implements FocusableItem {
  @event() activeChange: EventEmitter<boolean>;

  @event() disabledChange: EventEmitter<boolean>;

  @i18n() i18n = I18nService.keys.navigation;

  @state({ type: Boolean, reflect: true })
  protected expandedGroup = true;

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  groupItem: boolean;

  @property({ type: Boolean, reflect: true })
  hasFocus: NavigationFocusState = false;

  @property({ type: String, reflect: true, attribute: 'id' })
  id: string = createId();

  @querySlot('a')
  focusElement: HTMLElement;

  @querySlot('cds-icon', { assign: 'cds-icon-slot' })
  protected itemIcon: CdsIcon;

  @querySlotAll('.navigation-item-text')
  itemText: NodeListOf<HTMLSpanElement>;

  firstUpdated() {
    this.childNodes.forEach(child => {
      spanWrapper(child.childNodes);
      addSpanClass(child.childNodes, NAVIGATION_ITEM_TEXT);
      child.childNodes.forEach(grandChild => {
        spanWrapper(grandChild.childNodes);
        addSpanClass(grandChild.childNodes, NAVIGATION_ITEM_TEXT);
      });
    });
  }

  render() {
    return html`
      <div
        role="listitem"
        class="private-host ${this.groupItem ? 'group-item' : ''}"
        cds-layout="horizontal align:horizontal-stretch wrap:none"
      >
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  protected updated(props: PropertyValues) {
    super.updated(props);

    if (props.has('active')) {
      this.activeChange.emit(this.active);
    }

    if (props.has('disabled')) {
      this.disabledChange.emit(this.disabled);
    }

    if (this.disabled) {
      setAttributes(this, ['tabindex', '-1']);
    }

    manageScreenReaderElements(this, this.expanded);
  }
}
