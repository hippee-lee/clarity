/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directions, setAttributes, setOrRemoveAttribute } from '@cds/core/internal';
import { CdsNavigationGroup, CdsNavigationItem, CdsNavigationStart } from '../index.js';

export const NAVIGATION_ITEM_TEXT = 'navigation-item-text';
export const DEFAULT_NAVIGATION_LAYOUT = 'vertical';

export type FocusableElement = CdsNavigationItem | CdsNavigationStart;

export function isExpandedGroupEvent(event: KeyboardEvent): boolean {
  const element = event.target as HTMLElement;
  return element?.parentElement?.tagName === 'CDS-NAVIGATION-GROUP' && element?.parentElement?.hasAttribute('expanded');
}

export function isExpandedNavigationEvent(event: KeyboardEvent): boolean {
  const element = event.target as HTMLElement;
  return element?.parentElement?.tagName === 'CDS-NAVIGATION' && element?.parentElement?.hasAttribute('expanded');
}

export function fireGroupExpandedChangeEvent(event: KeyboardEvent): void {
  const target = event.target as HTMLElement;
  const group: CdsNavigationGroup = target?.parentElement as CdsNavigationGroup;
  group.expandedChange.emit(!group.expanded);
}

export function getStartGroupElement(event: KeyboardEvent): CdsNavigationStart | void {
  const target = event.target as HTMLElement;
  const group = target.closest('cds-navigation-group');
  const startElement = group?.querySelector('cds-navigation-start');
  if (startElement) {
    return startElement;
  }
}

export function getNextFocusElement(current: FocusableElement, elements: FocusableElement[]): FocusableElement {
  const idx = elements.indexOf(current);
  return elements[idx + 1] ? elements[idx + 1] : elements[0];
}

export function getPreviousFocusElement(current: FocusableElement, elements: FocusableElement[]): FocusableElement {
  const idx = elements.indexOf(current);
  return elements[idx - 1] ? elements[idx - 1] : elements[elements.length - 1];
}

export function getToggleIconDirection(element: CdsNavigationStart): Directions {
  if (element.isGroupStart) {
    return element.expanded ? 'down' : 'right';
  } else {
    return element.expandedRoot ? 'left' : 'right';
  }
}

export function isRootStartEvent(event: KeyboardEvent): boolean {
  const element = event.target as HTMLElement;
  if (element?.parentElement?.tagName === 'CDS-NAVIGATION-ITEM') {
    return false;
  }
  return !element?.closest('cds-navigation-group') && !!element?.closest('cds-navigation');
}

export function isGroupStartEvent(event: KeyboardEvent): boolean {
  const element = event.target as HTMLElement;
  return element.tagName === 'CDS-NAVIGATION-START' && element.parentElement?.tagName === 'CDS-NAVIGATION-GROUP';
}

export function isGroupItemEvent(event: KeyboardEvent): boolean {
  const element = event.target as HTMLElement;
  const groupTest = element?.closest('cds-navigation-item') && !!element?.closest('cds-navigation-group');
  return groupTest ?? false;
}

export function manageScreenReaderElements(element: any, expandedRoot: boolean): void {
  element.itemText.forEach((span: HTMLSpanElement) => {
    setOrRemoveAttribute(span, ['cds-layout', 'display:screen-reader-only'], () => {
      return !expandedRoot;
    });
  });
}

export function removeFocus(element: FocusableElement) {
  element.hasFocus = false;
  setAttributes(element, ['tabindex', '-1']);
}

export function setFocus(element: FocusableElement) {
  element.hasFocus = true;
  element.focusElement?.focus();
  setAttributes(element, ['tabindex', '0']);
}

export function visibleElement(element: FocusableElement): boolean {
  const elementType = element?.tagName;
  const grandparent = element?.parentElement?.parentElement;

  switch (elementType) {
    case 'CDS-NAVIGATION-ITEM':
      return element.hasAttribute('_expanded-group');

    case 'CDS-NAVIGATION-START':
      return !(grandparent?.tagName === 'CDS-NAVIGATION-GROUP' && !grandparent?.hasAttribute('expanded'));

    default:
      return false;
  }
}
