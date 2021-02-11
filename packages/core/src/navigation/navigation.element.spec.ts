/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsNavigation, CdsNavigationGroup, CdsNavigationItem, CdsNavigationStart } from './index.js';
import '@cds/core/date/register.js';
import Spy = jasmine.Spy;
import { DEFAULT_NAVIGATION_LAYOUT } from './utils/index.js';

describe('cds-navigation', () => {
  let component: CdsNavigation;
  let element: HTMLElement;
  let click: MouseEvent;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-navigation>
        <cds-navigation-start>Root start</cds-navigation-start>
        <cds-navigation-item>Root item</cds-navigation-item>
      </cds-navigation>
    `);
    component = element.querySelector<CdsNavigation>('cds-navigation');
    click = new MouseEvent('click');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create a navigation component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('emits the expandedChange event', async () => {
    await componentIsStable(component);
    let count = 0;
    const expandedSpy: Spy = jasmine.createSpy('expandedChange').and.callFake(() => {
      count++;
    });
    component.addEventListener('expandedChange', expandedSpy);
    const startEle = component.querySelector<CdsNavigationStart>('cds-navigation-start');
    startEle.dispatchEvent(click);
    await componentIsStable(component);
    expect(count).toBe(1);
  });

  it('should default to vertical layout ', async () => {
    await componentIsStable(component);
    expect(component.layout).toBe(DEFAULT_NAVIGATION_LAYOUT);
  });

  describe('should handle events', () => {
    let component: CdsNavigation;
    let element: HTMLElement;
    let groupStart: CdsNavigationStart;
    let groupItem: CdsNavigationItem;
    let rootStart: CdsNavigationStart;
    let group: CdsNavigationGroup;

    function initFocus(element: any) {
      const ie = new KeyboardEvent('keydown', {
        code: 'tab',
        key: 'tab',
        bubbles: true,
      });
      element.dispatchEvent(ie);
      element.focus();
    }

    function arrowDownEvent(element: any) {
      const ade = new KeyboardEvent('keydown', {
        code: 'ArrowDown',
        key: 'ArrowDown',
        bubbles: true,
      });
      element.dispatchEvent(ade);
    }

    // TODO: modify the arrow events to take starts or items for existing tests.
    function arrowUpEvent(element: any) {
      const aue = new KeyboardEvent('keydown', {
        code: 'ArrowUp',
        key: 'ArrowUp',
        bubbles: true,
      });
      element.dispatchEvent(aue);
    }

    function arrowLeftEvent(element: any) {
      const ale = new KeyboardEvent('keydown', {
        code: 'ArrowLeft',
        key: 'ArrowLeft',
        bubbles: true,
      });
      element.dispatchEvent(ale);
    }

    function arrowRightEvent(element: any) {
      const are = new KeyboardEvent('keydown', {
        code: 'ArrowRight',
        key: 'ArrowRight',
        bubbles: true,
      });
      element.dispatchEvent(are);
    }

    function homeEvent(element: any) {
      const he = new KeyboardEvent('keydown', {
        code: 'Home',
        key: 'Home',
        bubbles: true,
      });
      element.dispatchEvent(he);
    }

    function endEvent(element: any) {
      const ee = new KeyboardEvent('keydown', {
        code: 'End',
        key: 'End',
        bubbles: true,
      });
      element.dispatchEvent(ee);
    }

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation cds-motion="off">
          <cds-navigation-start id="rootStart">Root start</cds-navigation-start>
          <cds-navigation-item>Root item</cds-navigation-item>
          <cds-navigation-group>
            <cds-navigation-start id="groupStart">
              <cds-icon shape="home" size="md"></cds-icon>
              Group start
            </cds-navigation-start>
            <cds-navigation-item id="groupItem">Group item</cds-navigation-item>
          </cds-navigation-group>
        </cds-navigation>
      `);
      component = element.querySelector<CdsNavigation>('cds-navigation');
      group = component.querySelector<CdsNavigationGroup>('cds-navigation-group');
      groupStart = component.querySelector<CdsNavigationStart>('cds-navigation-start#groupStart');
      groupItem = component.querySelector<CdsNavigationItem>('cds-navigation-item#groupItem');
      rootStart = component.querySelector<CdsNavigationStart>('cds-navigation-start#rootStart');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('and remove focus from currentActiveItem after a blur event', async () => {
      await componentIsStable(component);
      initFocus(component);
      expect(rootStart.hasFocus).toBeTruthy();
      component.dispatchEvent(new Event('blur'));
      await componentIsStable(component);
      expect(rootStart.hasFocus).toBeFalsy();
    });

    it('and set the aria-activedescendent and currentActiveItem after cds-navigation element is focused', async () => {
      await componentIsStable(component);
      // nothing before component is focused on via tab key
      expect(component.ariaActiveDescendant).toBeUndefined();
      initFocus(component);
      await componentIsStable(component);
      // first item when it is focused on
      const activeEle = component.querySelector<CdsNavigationStart>(':scope > cds-navigation-start');
      expect(component.ariaActiveDescendant).toBe(activeEle.id);
      const currentActiveItem = component.currentActiveItem;
      expect(component.ariaActiveDescendant).toBe(currentActiveItem.id);
    });

    it('and set the next focusable element after arrow down', async () => {
      await componentIsStable(component);
      initFocus(component);
      // next item after root start element
      const itemEle = component.querySelector<CdsNavigationItem>('cds-navigation-item');
      arrowDownEvent(component);
      await componentIsStable(component);
      expect(component.ariaActiveDescendant).toBe(itemEle.id);
    });

    it('and set the previous focusable element after arrow up', async () => {
      await componentIsStable(component);
      initFocus(component); // focus is on first item (root start)
      await componentIsStable(component);
      arrowUpEvent(component);
      await componentIsStable(component);
      // expect the group start element to be focused b/c previous wraps around to the tail
      const groupStart = component.querySelector<CdsNavigationStart>('cds-navigation-group > cds-navigation-start');
      expect(component.ariaActiveDescendant).toBe(groupStart.id);
    });

    it('and expand the root navigation after arrow right', async () => {
      component.addEventListener('expandedChange', event => {
        if (event.returnValue) {
          component.setAttribute('expanded', '');
        }
      });
      await componentIsStable(component);
      initFocus(component); // focus is on first focusable element (root start)
      await componentIsStable(component);
      arrowRightEvent(component);
      await componentIsStable(component);
      expect(component.expanded).toBeTruthy();
    });

    it('and collapse the root navigation after arrow left event', async () => {
      component.addEventListener('expandedChange', event => {
        if (!event.returnValue) {
          component.removeAttribute('expanded');
        }
      });
      await componentIsStable(component);
      initFocus(component); // focus is on first focusable element (root start)
      await componentIsStable(component);
      arrowRightEvent(rootStart); // expands the root element
      await componentIsStable(component);
      arrowLeftEvent(rootStart);
      await componentIsStable(component);
      expect(component.expanded).toBeFalsy();
      expect(component.getAttribute('expanded')).toBeNull();
    });

    it('and expand the group navigation after arrow right event', async () => {
      group.addEventListener('expandedChange', event => {
        if (event.returnValue) {
          group.setAttribute('expanded', '');
        }
      });
      await componentIsStable(component);
      initFocus(component); // focus is on first focusable element (root start)
      arrowDownEvent(component); // rootItem
      arrowDownEvent(component); // group
      arrowRightEvent(groupStart);
      await componentIsStable(component);
      expect(group.expanded).toBeTruthy();
    });

    it('and move focus to group start element after arrow left event on item in expanded group', async () => {
      group.addEventListener('expandedChange', event => {
        if (event.returnValue) {
          group.setAttribute('expanded', '');
        }
      });
      await componentIsStable(component);
      initFocus(component); // focus is on first focusable element (root start)
      arrowDownEvent(component); // rootItem
      arrowDownEvent(component); // group
      arrowRightEvent(groupStart); // expand group
      arrowDownEvent(component); // focus on group item
      await componentIsStable(component);
      expect(group.expanded).toBeTruthy();
      arrowLeftEvent(groupItem);
      await componentIsStable(component);
      expect(groupStart.hasFocus).toBe(true);
    });

    it('and collapse navigation groups after left arrow keyboard event is triggered on and expanded group start element', async () => {
      group.addEventListener('expandedChange', event => {
        console.log('expandedChange', event);
        if (event.returnValue) {
          group.setAttribute('expanded', '');
        } else if (!event.returnValue) {
          group.removeAttribute('expanded');
        }
      });

      await componentIsStable(component);
      initFocus(component); // focus is on first focusable element (root start)
      arrowDownEvent(component); // rootItem
      arrowDownEvent(component); // group
      await componentIsStable(component);
      arrowLeftEvent(groupStart); // this should collapse the group
      await componentIsStable(component);
      expect(group.expanded).toBeFalsy();
    });

    it('and move focus to first/last focusable items after end/home key events', async () => {
      await componentIsStable(component);
      initFocus(component); // focus is on first focusable element (root start)
      await componentIsStable(component);
      endEvent(component); // focus should be on the first focusable item (rootStart)
      await componentIsStable(component);
      expect(component.ariaActiveDescendant).toBe(groupStart.id);
      homeEvent(component);
      await componentIsStable(component);
      expect(component.ariaActiveDescendant).toBe(rootStart.id);
    });

    it('and have a currentActiveItem', async () => {
      expect(component.currentActiveItem).toBeFalsy();
      await componentIsStable(component);
      initFocus(component); // focus is on first focusable element (root start)
      await componentIsStable(component);
      expect(component.currentActiveItem).toBeTruthy();
    });

    it('for group expandedChange emissions', async () => {
      await componentIsStable(component);
      initFocus(component);
      group.expandedChange.emit(true);
      expect(component.currentActiveItem.hasFocus).toBeTruthy();
    });
  });

  describe('layouts', () => {
    let component: CdsNavigation;
    let element: HTMLElement;
    let rootStart: CdsNavigationStart;

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation>
          <cds-navigation-item>Root item</cds-navigation-item>
          <cds-navigation-group>
            <cds-navigation-start>Group start</cds-navigation-start>
            <cds-navigation-item>Group item</cds-navigation-item>
          </cds-navigation-group>
          <cds-navigation-item slot="cds-navigation-end">
            <a href="#">
              <cds-icon shape="cog" size="sm"></cds-icon>
              nav end slot
            </a>
          </cds-navigation-item>
        </cds-navigation>
      `);
      component = element.querySelector<CdsNavigation>('cds-navigation');
      rootStart = component.querySelector<CdsNavigationStart>('cds-navigation > cds-navigation-start');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('handles templates without rootNavigationStart elements', function () {
      expect(rootStart).toBeNull();
    });

    it('handles the footer template with navigation-end slot', async () => {
      const slottedContainer = component.shadowRoot.querySelector('.navigation-end');
      const slottedItem = slottedContainer.querySelector<CdsNavigationItem>(
        'cds-navigation-item[slot="cds-navigation-end"]'
      );
      expect(slottedContainer).toBeDefined();
      expect(slottedItem).toBeDefined();
    });
  });

  describe('syncs props', () => {
    let component: CdsNavigation;
    let element: HTMLElement;

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation>
          <cds-navigation-start>Root start</cds-navigation-start>
          <cds-navigation-item>Root item</cds-navigation-item>
          <cds-navigation-group>
            <cds-navigation-start>Group start</cds-navigation-start>
            <cds-navigation-item>Group item</cds-navigation-item>
          </cds-navigation-group>
        </cds-navigation>
      `);
      component = element.querySelector<CdsNavigation>('cds-navigation');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('to navigationGroupItems', async () => {
      await componentIsStable(component);
      const item = component.querySelector<CdsNavigationItem>(':scope > cds-navigation-group > cds-navigation-item');
      expect(item.groupItem).toBe(true);
    });

    it('to navigationItemRefs', async () => {
      await componentIsStable(component);
      const itemRefs = component.querySelectorAll<CdsNavigationItem>('cds-navigation-item');
      itemRefs.forEach(item => {
        expect(item.layout).toBe(component.layout);
        expect(item.expanded).toBe(component.expanded);
      });
    });

    it('to navigationStartRefs', async () => {
      await componentIsStable(component);
      const startRefs = component.querySelectorAll<CdsNavigationStart>('cds-navigation-start');
      startRefs.forEach(start => {
        expect(start.layout).toBe(component.layout);
        expect(start.expandedRoot).toBe(component.expandedRoot);
      });
    });

    it('to rootNavigationStart', async () => {
      await componentIsStable(component);
      const rootStart = component.querySelector<CdsNavigationStart>(':scope > cds-navigation-start');
      expect(rootStart.layout).toBe(component.layout);
      expect(rootStart.expanded).toBe(component.expanded);
    });

    it('to rootNavigationItems', async () => {
      await componentIsStable(component);
      const rootItems = component.querySelectorAll<CdsNavigationItem>(':scope > cds-navigation-item');
      rootItems.forEach(item => {
        expect(item.layout).toBe(component.layout);
        expect(item.expanded).toBe(component.expanded);
      });
    });

    it('to navigationGroupRefs', async () => {
      await componentIsStable(component);
      const groupRefs = component.querySelectorAll<CdsNavigationItem>(':scope > cds-navigation-item');
      groupRefs.forEach(group => {
        expect(group.layout).toBe(component.layout);
      });
    });
  });
});
