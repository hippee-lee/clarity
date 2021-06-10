/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsNavigationGroup, CdsNavigationItem } from '@cds/core/navigation';
import '@cds/core/date/register.js';
import Spy = jasmine.Spy;

describe('cds-navigation-item', () => {
  let component: CdsNavigationItem;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<cds-navigation-item><a id="anchor">Navigation item</a></a></cds-navigation-item>`
    );
    component = element.querySelector<CdsNavigationItem>('cds-navigation-item');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create a navigation item component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('emits the activeChange event', async () => {
    let count = 0;
    const disabledSpy: Spy = jasmine.createSpy('activeChange').and.callFake(() => {
      count++;
    });
    await componentIsStable(component);
    component.addEventListener('activeChange', disabledSpy);
    component.setAttribute('active', '');
    await componentIsStable(component);
    expect(count).toBe(1);
    expect(disabledSpy).toHaveBeenCalledTimes(1);
    component.removeAttribute('active');
    await componentIsStable(component);
    expect(count).toBe(2);
  });

  it('emits the disabledChange event', async () => {
    let count = 0;
    const disabledSpy: Spy = jasmine.createSpy('disabledChange').and.callFake(() => {
      count++;
    });
    await componentIsStable(component);
    component.addEventListener('disabledChange', disabledSpy);
    component.setAttribute('disabled', '');
    await componentIsStable(component);
    expect(count).toBe(1);
    expect(disabledSpy).toHaveBeenCalledTimes(1);
    component.removeAttribute('disabled');
    await componentIsStable(component);
    expect(count).toBe(2);
  });

  it('wraps text inside a span element', async () => {
    await componentIsStable(component);
    const wrappedText = component.querySelector('.navigation-item-text');
    expect(wrappedText.textContent.trim()).toEqual('Navigation item');
  });

  it('manages screen reader text', async () => {
    await componentIsStable(component);
    const wrappedSpan = component.querySelector('span[cds-layout]');
    expect(wrappedSpan.getAttribute('cds-layout')).toBe('display:screen-reader-only');
    component.expanded = true;
    await componentIsStable(component);
    expect(wrappedSpan.getAttribute('cds-layout')).toBeFalsy();
  });

  it('has a id attribute', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('id')).toBeTruthy();
  });

  it('sets the correct focusElement', async () => {
    const anchor: HTMLAnchorElement = component.querySelector('#anchor');
    expect(component.focusElement).toBe(anchor);
  });

  it('can be focused', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('has-focus')).toBeFalsy();
    component.hasFocus = true;
    await componentIsStable(component);
    expect(component.getAttribute('has-focus')).toBe('');
  });

  it('cannot be focused when disabled', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('disabled')).toBeNull();
    expect(component.getAttribute('tabindex')).toBeNull();
    component.setAttribute('disabled', '');
    await componentIsStable(component);
    expect(component.getAttribute('disabled')).toBe('');
    expect(component.getAttribute('tabindex')).toBe('-1');
  });

  describe('when inside a cds-navigation-group', () => {
    let group: CdsNavigationGroup;
    let item: CdsNavigationItem;
    let element: HTMLElement;

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation-group>
          <cds-navigation-item>Navigation item</cds-navigation-item>
        </cds-navigation-group>
      `);
      group = element.querySelector<CdsNavigationGroup>('cds-navigation-group');
      item = element.querySelector<CdsNavigationItem>('cds-navigation-item');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('reflects the expandedGroup property', async () => {
      await componentIsStable(group);
      expect(item.getAttribute('_expanded-group')).toBeNull();
      group.setAttribute('expanded', '');
      await componentIsStable(group);
      expect(item.getAttribute('_expanded-group')).toBe('');
    });
  });
});
