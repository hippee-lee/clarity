/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit-element';
import {
  Animatable,
  animate,
  baseStyles,
  event,
  EventEmitter,
  i18n,
  I18nService,
  id,
  internalProperty,
  isVisible,
  onKey,
  property,
  querySlot,
  querySlotAll,
  reverseAnimation,
  setAttributes,
  syncProps,
} from '@cds/core/internal';
import { styles } from './navigation.element.css.js';

import {
  DEFAULT_NAVIGATION_LAYOUT,
  expandedGroupEvent,
  fireGroupExpandedChangeEvent,
  FocusableElement,
  getNextFocusElement,
  getPreviousFocusElement,
  getStartGroupElement,
  isRootStart,
  isGroupItemEvent,
  isGroupStartEvent,
  removeFocus,
  setFocus,
  visibleElement,
  expandedNavigation,
} from './utils/index.js';
import { NavigationLayout } from './interfaces/navigation-layout.interface.js';
import { CdsNavigationGroup } from './navigation-group.element.js';
import { CdsNavigationStart } from './navigation-start.element.js';
import { CdsNavigationItem } from './navigation-item.element.js';
import { CdsDivider } from '@cds/core/divider/index.js';
import { AnimationNavigationOpenName } from '../internal/motion/animations/cds-navigation-open.js';

export const CdsNavigationTagName = 'cds-navigation';

/**
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 *  <cds-navigation>
 *    <cds-navigation-item><a href="/home">Home</cds-navigation-item>
 *    <cds-navigation-item><a href="/account">Account</cds-navigation-item>
 *  </cds-navigation>
 * ```
 *
 * @beta
 * @element cds-navigation
 * @slot
 * @slot - cds-navigation-substart
 * @slot - cds-navigation-end
 * @cssprop --background-color
 * @cssprop --color
 * @cssprop --collapsed-width
 * @cssprop --divider-color
 * @cssprop --expanded-width
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --group-item-padding
 * @cssprop --horizontal-height
 * @cssprop --letter-spacing˚
 * @cssprop --line-height
 * @cssprop --navigation-padding
 */
@animate({
  expanded: {
    true: AnimationNavigationOpenName,
    false: reverseAnimation(AnimationNavigationOpenName),
  },
})
export class CdsNavigation extends LitElement implements Animatable {
  expandedRoot = false;

  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;

  @event() protected expandedChange: EventEmitter<boolean>;

  // TODO: why do I need this? What happens when I comment it out?
  @id() uniqId: string;

  /**
   * This is used to sync down the information to this.navigationGroupItems
   *
   * @type { boolean }
   * @protected
   */
  @internalProperty({ type: Boolean })
  protected groupItem = true;

  /**
   * Set and update the aria-active descended value onto the navigation.
   */
  @property({ type: String, reflect: true, attribute: 'aria-activedescendant' })
  ariaActiveDescendant: string;
  /**
   *
   * Used to set up child element layouts. When horizontal et. al are added this will need to reflect.
   *
   * @type { NavigationLayout }
   *
   */
  @property({ type: String })
  layout: NavigationLayout = DEFAULT_NAVIGATION_LAYOUT;

  /**
   *
   * Vertical navigation elements can be either wide or narrow. Expanded indicates it should be wide.
   * When navigation is wide cds-navigation-start button elements and cds-navigation-item a elements display
   * text. When it is narrow they do not (consumer should provide an icon that stays visible).

   * @type {boolean}
   */
  // State of the abridged / unabridged (old expanded/collapsed)
  @property({ type: Boolean })
  expanded = false;

  @i18n() i18n = I18nService.keys.navigation;

  /**
   * The end slot that items can be projected into with slot="cds-navigation-end"
   */
  @querySlot('[slot="cds-navigation-end"]', { assign: 'cds-navigation-end' })
  protected navigationEnd: HTMLElement;

  // List for managing arrow key navigation of the component
  /**
   * This slot query is used to identify and manage all focusable elements needed for arrow key navigation
   */
  @querySlotAll('cds-navigation-start, cds-navigation-item:not([disabled])')
  protected allNavigationElements: NodeListOf<FocusableElement>;

  /**
   * Get references to all of the start elements so they can be passed state when updates are made.
   */
  @querySlotAll('cds-navigation-start')
  protected navigationStartRefs: NodeListOf<CdsNavigationStart>;

  /**
   * query for cds-divider  and project into navigation-body slot.
   */
  @querySlotAll(':scope > cds-divider', { assign: 'navigation-body' })
  protected rootDividers: NodeListOf<CdsDivider>;

  /**
   * query for root level groups and project them into the navigation-body slot.
   */
  @querySlotAll(':scope > cds-navigation-group', { assign: 'navigation-body' })
  protected rootNavigationGroups: NodeListOf<CdsNavigationGroup>;

  /**
   * query for root level items and project them into the navigation-body slot.
   */
  @querySlotAll(':scope > cds-navigation-item', { assign: 'navigation-body' })
  protected rootNavigationItems: NodeListOf<CdsNavigationItem>;

  /**
   * query for the root level start items and project them into the navigation-start slot.
   */
  @querySlot(':scope > cds-navigation-start', { assign: 'navigation-start' })
  protected rootNavigationStart: CdsNavigationStart;

  /**
   * query for items inside a cds-navigation-group, used to pass state down
   */
  @querySlotAll(':scope > cds-navigation-group > cds-navigation-item')
  protected navigationGroupItems: NodeListOf<CdsNavigationGroup>;

  /**
   * query for all cds-navigation elements, used to pass state down
   */
  @querySlotAll('cds-navigation-item')
  protected navigationItemRefs: NodeListOf<CdsNavigationItem>;

  /**
   * query for all groups (including any nested groups), used ot pass state down
   */
  @querySlotAll('cds-navigation-group')
  protected navigationGroupRefs: NodeListOf<CdsNavigationGroup>;

  private initAriaActiveDescendant() {
    /**
     * If there is a currentActiveItem, focus on that
     * If there is not a currentActiveItem focus on the first visible element
     */
    const focusElement = this.currentActiveItem ? this.currentActiveItem : this.allNavigationElements[0];
    setFocus(focusElement);
    this.ariaActiveDescendant = focusElement.id;
  }

  private blurActiveElement() {
    if (this.currentActiveItem) {
      removeFocus(this.currentActiveItem);
    }
  }

  /**
   * Rules for keyboard handling logic:
   *
   * 1. when cds-navigation element receives focus if there is already an active focus item,
   *    set focus on it, else set focus on first focusable item
   * 2. arrow key down sets focus on the next focusable item, if last item it moves focus to first focusable item
   * 3. arrow key up sets focus on the previous focusable item, if first it moves focus to the last focusable item
   * 4. arrow key left on a cds-navigation-item inside cds-navigation-group will put focus on the cds-navigation-start
   *    button for the group
   * 5. arrow key left on a cds-navigation-start element inside a cds-navigation-group will emit the groups
   *    expandedChange event
   * 6. arrow key right on a non expanded cds-navigation-group will emit the groups expandedChange event
   * 7. arrow key left on a root cds-navigation-start element will fire the cds-navigation expandedChange event if
   *    the cds-navigation element is expanded
   * 8. arrow key right on a root cds-navigation-start element will fire the cds-navigation expandedChange event if
   *    the cds-navigation element is not expanded
   * 9. home key will move focus to the first focusable item
   * 10. end key will move focus to the last focusable item
   *
   * We may need a way to let consumers mark elements and include them in the focusable elements, not sure how yet
   *
   * @param e
   * @private
   */
  private keyboardNavigationHandler = (e: KeyboardEvent) => {
    const focusableElements = Array.from(this.allNavigationElements).filter(visibleElement);
    onKey('arrow-down', e, () => {
      if (this.currentActiveItem) {
        removeFocus(this.currentActiveItem);
        const next = getNextFocusElement(this.currentActiveItem, focusableElements);
        this.ariaActiveDescendant = next.id;
        setFocus(next);
        e.preventDefault(); // needed for when when overflow scrolling is enabled
      }
    });

    onKey('arrow-up', e, () => {
      if (this.currentActiveItem) {
        removeFocus(this.currentActiveItem);
        const next = getPreviousFocusElement(this.currentActiveItem, focusableElements);
        this.ariaActiveDescendant = next.id;
        setFocus(next);
        e.preventDefault(); // needed for when when overflow scrolling is enabled
      }
    });

    // Is it a start and inside a group? is the group not expanded?
    // trigger the groups expanded change event
    onKey('arrow-right', e, () => {
      if (isGroupStartEvent(e) && !expandedGroupEvent(e)) {
        fireGroupExpandedChangeEvent(e);
      }

      if (isRootStart(e) && !expandedNavigation(e)) {
        this.toggle();
      }
    });

    // Is it an item inside of a group?
    // is the group expanded? -> move focus to the group start focusable element
    onKey('arrow-left', e, () => {
      // is this a start element inside of a group?
      // is the group expanded?
      // => emit the group expandedChange event
      if (isGroupStartEvent(e) && expandedGroupEvent(e)) {
        fireGroupExpandedChangeEvent(e);
      }

      if (this.currentActiveItem && isGroupItemEvent(e)) {
        // remove focus from currently focused element
        // focus on group start element
        removeFocus(this.currentActiveItem);
        const startGroupParent = getStartGroupElement(e) as CdsNavigationStart;
        this.ariaActiveDescendant = startGroupParent.id;
        setFocus(startGroupParent as FocusableElement);
      }

      if (isRootStart(e) && expandedNavigation(e)) {
        this.toggle();
      }
    });

    onKey('home', e, () => {
      if (this.currentActiveItem) {
        removeFocus(this.currentActiveItem);
        const home = focusableElements[0];
        this.ariaActiveDescendant = home.id;
        setFocus(home);
      }
    });

    onKey('end', e, () => {
      if (this.currentActiveItem) {
        removeFocus(this.currentActiveItem);
        const end = focusableElements[focusableElements.length - 1];
        this.ariaActiveDescendant = end.id;
        setFocus(end);
      }
    });
  };

  private toggle() {
    this.expandedChange.emit(!this.expanded);
  }

  get currentActiveItem() {
    return this.visibleChildren.find(c => c.id === this.ariaActiveDescendant);
  }

  protected get footerTemplate() {
    return this.navigationEnd
      ? html`
          <div role="region" class="navigation-end">
            <slot name="cds-navigation-end"></slot>
          </div>
        `
      : '';
  }

  protected get startTemplate() {
    let returnHTML;

    this.rootNavigationStart
      ? (returnHTML = html`
          <div role="region" class="navigation-start" cds-layout="vertical">
            <slot name="navigation-start"></slot>
            <cds-divider class="start-divider"></cds-divider>
          </div>
        `)
      : (returnHTML = '');

    return returnHTML;
  }

  protected get visibleChildren(): FocusableElement[] {
    return Array.from(this.allNavigationElements).filter(n => isVisible(n));
  }

  firstUpdated() {
    if (this.rootNavigationStart) {
      this.rootNavigationStart.addEventListener('click', () => {
        this.toggle();
      });
    }

    // set all visible navigation elements to tabindex = -1
    this.allNavigationElements.forEach(item => {
      setAttributes(item, ['tabindex', '-1']);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('focus', this.initAriaActiveDescendant);
    this.removeEventListener('keydown', this.keyboardNavigationHandler);
  }

  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
    this.addEventListener('focus', this.initAriaActiveDescendant);
    this.addEventListener('keydown', this.keyboardNavigationHandler);
    this.addEventListener('blur', this.blurActiveElement);
    this.addEventListener('expandedChange', event => {
      if (this.currentActiveItem && event.target instanceof CdsNavigationGroup) {
        setFocus(this.currentActiveItem);
      }
    });
  }

  render() {
    return html`<nav
      tabindex="-1"
      class="private-host"
      aria-label="${this.i18n.navigationLabel}"
      cds-layout="${DEFAULT_NAVIGATION_LAYOUT}
                  wrap:none
                  align:horizontal-center"
    >
      ${this.startTemplate}
      <slot name="cds-navigation-substart"></slot>
      <div class="navigation-body-wrapper" role="list" cds-layout="p-y:xxs">
        <div
          class="navigation-body"
          role="presentation"
          cds-layout="${this.layout}
                    wrap:none"
        >
          <slot name="navigation-body"></slot>
        </div>
      </div>
      ${this.footerTemplate}
    </nav>`;
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);

    if (props.has('expanded')) {
      this.expandedRoot = this.expanded;
    }

    this.updateChildrenProps();
  }

  updateChildrenProps() {
    if (this.navigationGroupItems) {
      this.navigationGroupItems.forEach(item => {
        syncProps(item, this, {
          groupItem: true,
        });
      });
    }

    if (this.navigationItemRefs) {
      this.navigationItemRefs.forEach(item => {
        syncProps(item, this, {
          layout: true,
          expanded: true,
        });
      });
    }

    if (this.navigationStartRefs) {
      this.navigationStartRefs.forEach(item => {
        syncProps(item, this, {
          layout: true,
          expandedRoot: true,
        });
      });
    }

    if (this.rootNavigationStart) {
      syncProps(this.rootNavigationStart, this, {
        layout: true,
        expanded: this.expanded,
      });
    }

    if (this.rootNavigationItems.length > 0) {
      this.rootNavigationItems.forEach(item => {
        syncProps(item, this, {
          layout: true,
          expanded: this.expanded,
        });
      });
    }

    if (this.navigationGroupRefs.length > 0) {
      this.navigationGroupRefs.forEach(item => {
        syncProps(item, this, {
          layout: true,
        });
      });
    }
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
