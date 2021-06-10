/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import {
  addSpanClass,
  baseStyles,
  createId,
  Directions,
  i18n,
  I18nService,
  property,
  querySlot,
  querySlotAll,
  spanWrapper,
} from '@cds/core/internal';
import styles from './navigation-start.element.scss';
import { getToggleIconDirection, manageScreenReaderElements, NAVIGATION_ITEM_TEXT } from './utils/index.js';
import { CdsIcon } from '@cds/core/icon';
import { FocusableItem, NavigationExpandedState, NavigationFocusState } from './interfaces/navigation.interfaces.js';

export const CdsNavigationStartTagName = 'cds-navigation-start';

/**
 * Web component navigation.
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-start>Start text</cds-navigation-start>
 * ```
 * @beta
 * @element cds-navigation-start
 * @cssprop --color: inherit
 * @cssprop --line-height: inherit
 * @cssprop --font-size: inherit
 * @cssprop --font-weight: inherit
 * @slot
 * @slot cds-navigation-start-icon - customize the default start toggle icon
 */
export class CdsNavigationStart extends LitElement implements FocusableItem {
  @i18n() i18n = I18nService.keys.navigation;

  /**
   * @desc
   * Describes the groups expanded state
   *
   * @public
   */
  @property({ type: Boolean })
  expanded: NavigationExpandedState = false;

  /**
   * @desc
   * Synced down from the root navigation element. Determines if the vertical navigation is wide or narrow.
   */
  @property({ type: Boolean })
  expandedRoot: NavigationExpandedState = false;

  /**
   * @desc
   * Is set to true by the root cds-navigation element when the instance is focused.
   */
  @property({ type: Boolean, reflect: true })
  hasFocus: NavigationFocusState = false;

  /**
   * @desc
   * As a focusable item, use this id value to set the aria-activedescendent on the
   * cds-navigation attribute.
   */
  @property({ type: String, reflect: true, attribute: 'id' })
  id: string = createId();

  /**
   * @desc
   * The value is synced down from the root cds-navigatino element.
   */
  @property({ type: Boolean })
  isGroupStart = false;

  @property({ type: String })
  navigationGroupId: string;

  /**
   * @desc
   * start elements need to find the button in firstUpdated or the arrow key navigation breaks.
   */
  focusElement: HTMLButtonElement;

  @querySlot('[cds-navigation-start-icon]', { assign: 'cds-icon-slot' })
  protected startIcon: CdsIcon;

  @querySlotAll('.navigation-item-text')
  itemText: NodeListOf<HTMLSpanElement>;

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);
    const button = this.shadowRoot?.querySelector('button');
    if (button) {
      this.focusElement = button;
    }
    spanWrapper(this.childNodes);
    addSpanClass(this.childNodes, NAVIGATION_ITEM_TEXT);
  }

  private getGroupIconAlignment() {
    return this.expandedRoot && this.isGroupStart ? 'align:right' : 'align:left';
  }

  private getRootIconAlignment() {
    return this.expandedRoot && !this.isGroupStart ? 'align:right' : 'align:left';
  }

  render() {
    return html`
      <div class="private-host">
        <button
          aria-expanded="${this.expanded}"
          cds-layout="horizontal align:stretch align:vertical-center"
          class="private-host"
          id="${this.isGroupStart ? this.navigationGroupId : ''}"
          type="button"
          part="start-button"
        >
          <div cds-layout="horizontal align:vertical-center">
            <span>
              <slot></slot>
            </span>
            <span
              class="icon-slot"
              cds-layout="${this.isGroupStart ? this.getGroupIconAlignment() : this.getRootIconAlignment()}"
            >
              <slot name="cds-icon-slot">
                ${this.startIcon
                  ? ''
                  : html`<cds-icon
                      size="${!this.expandedRoot && this.isGroupStart ? 'xs' : 'sm'}"
                      shape="${this.isGroupStart ? 'angle' : 'angle-double'}"
                      direction="${this.toggleIconDirection}"
                    >
                    </cds-icon>`}
              </slot>
            </span>
          </div>
        </button>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  get toggleIconDirection(): Directions {
    return getToggleIconDirection(this);
  }

  updated(props: PropertyValues) {
    super.updated(props);
    manageScreenReaderElements(this, this.expandedRoot);
  }
}
