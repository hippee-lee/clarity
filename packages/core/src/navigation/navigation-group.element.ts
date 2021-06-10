/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';

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
  state,
  syncProps,
} from '@cds/core/internal';
import styles from './navigation-group.element.scss';
import { CdsNavigationItem } from './navigation-item.element';
import { CdsNavigationStart } from './navigation-start.element';
import { NavigationExpandedState } from './interfaces/navigation.interfaces';

export const CdsNavigationGroupTagName = 'cds-navigation-group';

/**
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-group>
 *   <cds-navigation-start></cds-navigation-start>
 *    <cds-navigation-item><a href="/home">Home</cds-navigation-item>
 *    <cds-navigation-item><a href="/account">Account</cds-navigation-item>
 * </cds-navigation-group>
 * ```
 *
 * @beta
 * @element cds-navigation-group
 * @event expandedChange - notify when the user has clicked the navigation expand/collapse button
 * @event cdsMotionChange - notify when a motion is started or ended
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 * @cssprop --background
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
  expandedChange: EventEmitter<boolean>;

  @event()
  cdsMotionChange: EventEmitter<string>;

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
  @state()
  private get isGroupStart(): boolean {
    return !!this.groupStart;
  }

  /**
   * @desc
   * The element id is used to update cds-navigation aria-activedescendent when a group is the current
   * active item.
   */
  @property({ type: String, reflect: true, attribute: 'id' })
  id = createId();

  @property({ type: Boolean, reflect: true })
  expanded: NavigationExpandedState = false;

  @property({ type: Boolean })
  active: boolean;

  /**
   * @desc
   * The value of this property is passed down to start and item children. It is used to query for visible items when
   * managing focus with key events in the root cds-navigation element.
   *
   * Note: eslint-disable  @typescript-eslint/no-unused-vars isn't ignoring the line
   // eslint error happens because the value is set but never read.

   * @private
   */
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

  render() {
    return html`
      <div role="listitem" class="private-host" cds-layout="vertical wrap:none align:horizontal-stretch">
        <slot name="group-start"></slot>
        <div role="region" class="group-items-wrapper" aria-labelledby="${this.navigationGroupId}">
          <div role="list" class="group-items-container">
            <div
              class="navigation-group-items"
              aria-expanded="${this.expanded}"
              cds-layout="vertical wrap:none p:xxs align:horizontal-stretch"
            >
              <slot name="group-items"></slot>
            </div>
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
