/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, internalProperty, LitElement, PropertyValues } from 'lit-element';

import {
  Animatable,
  animate,
  AnimationNavigationGroupOpenName,
  baseStyles,
  createId,
  event,
  EventEmitter,
  i18n,
  I18nService,
  id,
  property,
  querySlot,
  querySlotAll,
  reverseAnimation,
  syncProps,
} from '@cds/core/internal';
import { styles } from './navigation-group.element.css.js';
import { NavigationLayout } from './interfaces/navigation-layout.interface.js';
import { DEFAULT_NAVIGATION_LAYOUT } from './utils/index.js';
import { CdsNavigationItem } from './navigation-item.element';
import { CdsNavigationStart } from './navigation-start.element';

export const CdsNavigationGroupTagName = 'cds-navigation-group';

/**
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
@animate({
  expanded: {
    true: AnimationNavigationGroupOpenName,
    false: reverseAnimation(AnimationNavigationGroupOpenName),
  },
})
export class CdsNavigationGroup extends LitElement implements Animatable {
  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;

  @event()
  expandedChange: EventEmitter<boolean>;

  /**
   * @desc
   * Associate the cds-navigation-button in this template with projected into the
   * aria-labelledby wrapper region.
   *
   * @private
   */
  @id() navigationGroupId: string;

  @i18n() i18n = I18nService.keys.navigation;

  /**
   * @description
   * Getter method for a reference to the selector cds-navigation-group > cds-navigation-start
   * This lets each group flag its cds-navigation-start element and sync that info down. This is
   * needed because cds-navigation-start elements can be used at the root level and inside
   * cds-navigation-group elements.
   *
   * @private
   */
  @internalProperty()
  private get isGroupStart(): boolean {
    return !!this.groupStart;
  }

  /**
   * @desc
   * The element id is used to update cds-navigation aria-activedescendent when a group is the current
   * active item.
   */
  @property({ type: String, reflect: true, attribute: 'id' })
  id: string = createId();

  @internalProperty()
  protected layout: NavigationLayout = DEFAULT_NAVIGATION_LAYOUT;

  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property({ type: Boolean })
  active: boolean;

  /**
   * @desc
   * The value of this property is passed down to start and item children. It is used to query for visible items when
   * managing focus with key events in the root cds-navigation element.
   *
   * @private
   */
  // Note: eslint-disable  @typescript-eslint/no-unused-vars isn't ignoring the line
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  private expandedGroup = false;

  /**
   * @desc
   *
   * Used to coordinate css things and the keyboard navigation focus changes.
   */
  hasFocus = false;

  @querySlot('button')
  focusElement: HTMLElement;

  @querySlot(':scope > cds-navigation-start', { assign: 'group-start' })
  protected groupStart: CdsNavigationStart;

  @querySlotAll(':scope > cds-navigation-item', { assign: 'group-items' })
  protected groupItems: NodeListOf<CdsNavigationItem>;

  @querySlotAll(':scope > cds-navigation-group', { assign: 'group-items' })
  protected nestedGroups: NodeListOf<CdsNavigationItem>;

  protected get itemsTemplate() {
    return html` <div
      class="navigation-group-items"
      aria-expanded="${this.expanded}"
      cds-layout="vertical wrap:none p:xxs"
    >
      <slot name="group-items"></slot>
    </div>`;
  }

  render() {
    return html`
      <div role="listitem" class="private-host" cds-layout="vertical wrap:none">
        <slot name="group-start"></slot>
        <div role="region" class="group-items-wrapper" aria-labelledby="${this.navigationGroupId}">
          <div role="list" class="group-items-container">
            ${this.itemsTemplate}
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  private toggle() {
    this.expandedChange.emit(!this.expanded);
  }

  protected firstUpdated() {
    if (this.groupStart) {
      this.groupStart.addEventListener('click', () => {
        this.toggle();
      });
    }
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);

    if (props.has('expanded')) {
      this.expandedGroup = this.expanded;
    }

    if (this.groupStart) {
      syncProps(this.groupStart, this, {
        navigationGroupId: true,
        expanded: true,
        isGroupStart: this.isGroupStart,
      });
    }

    this.groupItems.forEach(item => {
      syncProps(item, this, {
        expandedGroup: true,
      });
    });
  }
}
