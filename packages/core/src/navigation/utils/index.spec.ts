/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

import { CdsNavigation, CdsNavigationGroup, CdsNavigationItem, CdsNavigationStart } from '@cds/core/navigation';
import '@cds/core/navigation/register.js';
import {
  isExpandedGroupEvent,
  isExpandedNavigationEvent,
  fireGroupExpandedChangeEvent,
  FocusableElement,
  getNextFocusElement,
  getPreviousFocusElement,
  getStartGroupElement,
  getToggleIconDirection,
  isGroupItemEvent,
  isGroupStartEvent,
  isRootStartEvent,
  removeFocus,
  setFocus,
  visibleElement,
} from './index.js';

describe('navigation internal utilities', () => {
  let arrowDown: KeyboardEvent;
  let groupElement: CdsNavigationGroup;
  let groupItem: CdsNavigationItem;
  let groupInvisibleItem: CdsNavigationItem;
  let groupStart: CdsNavigationStart;
  let rootItem: CdsNavigationItem;
  let rootStart: CdsNavigationStart;
  let testElement: HTMLElement;
  let component: CdsNavigation;
  const testTemplate = html`
    <cds-navigation id="rootNavigation" expanded>
      <cds-navigation-start id="rootStart">Root start element</cds-navigation-start>
      <cds-navigation-group id="groupElement" expanded>
        <cds-navigation-start id="groupStart">Group start element</cds-navigation-start>
        <cds-navigation-item id="groupItem">Group item one</cds-navigation-item>
        <cds-navigation-item>Group item two</cds-navigation-item>
      </cds-navigation-group>
      <cds-navigation-group expanded>
        <cds-navigation-start>Group start element</cds-navigation-start>
        <cds-navigation-item id="invisibleItem">Group item one</cds-navigation-item>
        <cds-navigation-item>Group item two</cds-navigation-item>
      </cds-navigation-group>
      <cds-navigation-item id="rootItem"><a>Root item one</a></cds-navigation-item>
      <cds-navigation-item>Root item two</cds-navigation-item>
    </cds-navigation>
  `;

  beforeEach(async () => {
    arrowDown = new KeyboardEvent('keydown', { code: 'ArrowDown', key: 'ArrowDown' });
    testElement = await createTestElement(testTemplate);
    component = testElement.querySelector<CdsNavigation>('cds-navigation');
    groupElement = component.querySelector<CdsNavigationGroup>('cds-navigation-group#groupElement');
    groupItem = component.querySelector<CdsNavigationItem>('cds-navigation-item#groupItem');
    groupInvisibleItem = component.querySelector<CdsNavigationItem>('cds-navigation-item#groupInvisibleItem');
    groupStart = component.querySelector<CdsNavigationStart>('cds-navigation-start#groupStart');
    rootItem = component.querySelector<CdsNavigationItem>('cds-navigation-item#rootItem');
    rootStart = component.querySelector<CdsNavigationStart>('cds-navigation-start#rootStart');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('manage FocusableElements', () => {
    it('and get the previous focusable element', () => {
      const focusableElements: FocusableElement[] = [rootStart, rootItem, groupStart, groupItem];

      expect(getPreviousFocusElement(rootStart, focusableElements)).toBe(groupItem, 'with head call previous behavior');

      expect(getPreviousFocusElement(groupStart, focusableElements)).toBe(rootItem, 'with standard previous behavior');
    });

    it('and get the next focusable element', () => {
      const focusableElements: FocusableElement[] = [rootStart, rootItem, groupStart, groupItem];

      expect(getNextFocusElement(rootItem, focusableElements)).toBe(groupStart, 'with standard next behavior');

      expect(getNextFocusElement(groupItem, focusableElements)).toBe(rootStart, 'with tail call next behavior');
    });

    it('by identifying visible group start elements', async () => {
      // group starts
      expect(visibleElement(groupStart)).toBe(true);
      groupElement.addEventListener('expandedChange', () => {
        expect(visibleElement(groupStart)).toBe(false);
      });
      groupElement.removeAttribute('expanded');
    });

    it('determines elements that are not visible', () => {
      expect(visibleElement(groupInvisibleItem)).toBe(false);
    });

    it('by identifying visible group item elements', () => {
      // group starts
      expect(visibleElement(groupItem)).toBe(true);
      groupElement.addEventListener('expandedChange', () => {
        expect(visibleElement(groupItem)).toBeNull();
      });
      groupElement.removeAttribute('expanded');
    });

    it('determines when an event is not an expanded group element', () => {
      expect(isExpandedGroupEvent(arrowDown)).toBe(false);
    });

    it('determines when events are not from expanded root elements', () => {
      expect(isExpandedNavigationEvent(arrowDown)).toBe(false);
    });

    it('determines events not from root start elements', () => {
      expect(isRootStartEvent(arrowDown)).toBe(false);
    });

    it('determines events not from group items', () => {
      expect(isGroupItemEvent(arrowDown)).toBe(false);
    });

    it('by setting and removing focus', () => {
      // Start elements implement FocusableElement interface
      setFocus(rootStart);
      expect(rootStart.hasFocus).toBe(true, 'cds-naavigation-start element is not focused');
      expect(rootStart.getAttribute('tabindex')).toBe('0', 'cds-naavigation-start element is not focused');
      removeFocus(rootStart);
      expect(rootStart.hasFocus).toBe(false, 'cds-naavigation-start element is still focused');
      expect(rootStart.getAttribute('tabindex')).toBe('-1', 'cds-naavigation-start element is still focused');

      // Item elements implement FocusableElement interface
      setFocus(rootItem);
      expect(rootItem.hasFocus).toBe(true, 'cds-navigation-item element is not focusable');
      expect(rootItem.getAttribute('tabindex')).toBe('0', 'cds-navigation-item element is not focusable');
      removeFocus(rootItem);
      expect(rootItem.hasFocus).toBe(false, 'cds-navigation-item element is still focusable');
      expect(rootItem.getAttribute('tabindex')).toBe('-1', 'cds-navigation-item element is still focusable');
    });
  });

  describe('for keyboard navigation events', () => {
    it('identifies item events inside group elements', () => {
      rootItem.dispatchEvent(arrowDown);
      expect(isGroupItemEvent(arrowDown)).toBe(false);
      groupItem.dispatchEvent(arrowDown);
      expect(isGroupItemEvent(arrowDown)).toBe(true);
    });

    it('identifies group start events', () => {
      rootStart.dispatchEvent(arrowDown);
      expect(isGroupStartEvent(arrowDown)).toBe(false);
      groupStart.dispatchEvent(arrowDown);
      expect(isGroupStartEvent(arrowDown)).toBe(true);
    });

    it('identifies root cds-navigation-start elements', () => {
      groupStart.dispatchEvent(arrowDown);
      expect(isRootStartEvent(arrowDown)).toBe(false);
      rootStart.dispatchEvent(arrowDown);
      expect(isRootStartEvent(arrowDown)).toBe(true);
    });

    it('ignores some arrow events on root item elements', async () => {
      await componentIsStable(component);
      const anchor = rootItem.querySelector('a');
      anchor.dispatchEvent(arrowDown);
      await componentIsStable(component);
      expect(isRootStartEvent(arrowDown)).toBe(false);
    });

    it('returns a CdsGroupStart element for events', () => {
      rootStart.dispatchEvent(arrowDown);
      const voidResult = getStartGroupElement(arrowDown);
      expect(voidResult).toBeFalsy();
      groupStart.dispatchEvent(arrowDown);
      const startResult = getStartGroupElement(arrowDown);
      expect(startResult).toBe(groupStart as CdsNavigationStart);
    });

    it('fires group expanded change events', () => {
      const changedSpy = jasmine.createSpy('expandedChange');
      groupElement.addEventListener('expandedChange', changedSpy);
      groupStart.dispatchEvent(arrowDown);
      fireGroupExpandedChangeEvent(arrowDown);
      expect(changedSpy).toHaveBeenCalled();
    });

    it('detects expanded cds-navigation-group events', () => {
      groupStart.dispatchEvent(arrowDown);
      groupElement.removeAttribute('expanded');
      groupStart.dispatchEvent(arrowDown);
      expect(isExpandedGroupEvent(arrowDown)).toBe(false);
    });

    it('detects expanded cds-navigation events', () => {
      rootStart.dispatchEvent(arrowDown);
      expect(isExpandedNavigationEvent(arrowDown)).toBe(true);
      component.removeAttribute('expanded');
      rootStart.dispatchEvent(arrowDown);
      expect(isExpandedNavigationEvent(arrowDown)).toBe(false);
    });
  });

  describe('will getToggleIconDirections', () => {
    it('when cds-navigation-group element is collapsed', () => {
      groupStart.expanded = false;
      expect(getToggleIconDirection(groupStart)).toBe('right');
    });

    it('when cds-navigation-group element is expanded', () => {
      groupStart.expanded = true;
      expect(getToggleIconDirection(groupStart)).toBe('down');
    });

    it('when cds-navigation element is expanded', () => {
      rootStart.expandedRoot = true;
      expect(getToggleIconDirection(rootStart)).toBe('left');
    });

    it('when cds-navigation element is collapsed', () => {
      rootStart.expandedRoot = false;
      expect(getToggleIconDirection(rootStart)).toBe('right');
    });
  });
});
