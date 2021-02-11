/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues, TemplateResult } from 'lit-element';
import {
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
import { styles } from './navigation-start.element.css.js';
import { NavigationLayout } from './interfaces/navigation-layout.interface.js';
import {
  DEFAULT_NAVIGATION_LAYOUT,
  getToggleIconDirection,
  manageScreenReaderElements,
  NAVIGATION_ITEM_TEXT,
} from './utils/index.js';
import { CdsIcon } from '@cds/core/icon';
import { FocusableItem } from './interfaces/focusable-item.interface.js';

export const CdsNavigationStartTagName = 'cds-navigation-start';

/**
 * Web component navigation.
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-start>
 *
 * </cds-navigation-start>
 * ```
 *
 * @element cds-navigation-start
 * @slot
 * @slot cds-navigation-start-icon
 */
export class CdsNavigationStart extends LitElement implements FocusableItem {
  @i18n() i18n = I18nService.keys.navigation;

  /**
   * @desc
   * Used to render the correct template for layout. Default is vertical. Will stay protected even
   * after horizontal, sub and responsive layouts are added.
   *
   * @public
   */
  @property({ type: String })
  layout: NavigationLayout = DEFAULT_NAVIGATION_LAYOUT;

  /**
   * @desc
   * Describes the state of a vertical layout navigation element.
   *
   * @public
   */
  @property({ type: Boolean })
  expanded = false;

  /**
   * @desc
   * Synced down from the root navigation element. Determines if the vertical navigation is wide or narrow.
   */
  @property({ type: Boolean })
  expandedRoot = false;

  /**
   * @desc
   * Is set to true by the root cds-navigation element when the instance is focused.
   */
  @property({ type: Boolean, reflect: true })
  hasFocus = false;

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
    spanWrapper(this.childNodes, NAVIGATION_ITEM_TEXT);
  }

  private internalGroupStart(): TemplateResult {
    return html`
      <button
        aria-expanded="${this.expanded}"
        cds-layout="horizontal align:stretch align:vertical-center"
        class="group-start-action"
        id="${this.navigationGroupId}"
        type="button"
      >
        <div cds-layout="horizontal align:vertical-center">
          <span>
            <slot></slot>
          </span>
          <span class="icon-slot" cds-layout="${this.expandedRoot && this.isGroupStart ? 'align:right' : 'align:left'}">
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
    `;
  }

  private internalRootStart(): TemplateResult {
    return html`
      <button class="root-start-action" cds-layout="horizontal align:vertical-center" role="switch" type="button">
        <span>
          <slot></slot>
        </span>
        <span class="icon-slot" cds-layout="${this.expandedRoot && !this.isGroupStart ? 'align:right' : 'align:left'}">
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
        <label cds-layout="display:screen-reader-only" for="cds-navigation">
          ${this.expandedRoot ? this.i18n.navigationUnabridgedText : this.i18n.navigationAbridgedText}</label
        >
      </button>
    `;
  }

  render() {
    return html`
      <div class="private-host">
        ${this.isGroupStart ? this.internalGroupStart() : this.internalRootStart()}
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
