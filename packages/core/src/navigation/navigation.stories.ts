/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/navigation/register.js';
import { getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';
import { html } from 'lit-html';
import { CdsNavigation } from '@cds/core/navigation';
import { CdsNavigationGroup } from '@cds/core/navigation';

export default {
  title: 'Stories/Navigation',
  component: 'cds-navigation',
  argTypes: getElementStorybookArgTypes('cds-navigation', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A548',
    },
  },
};

// export function API() {
//   return html`
//     <cds-navigation>
//       hello nav
//     </cds-navigation>
//   `;
// }

export function verticalBasic() {
  return html`
    <div style="height: 500px">
      <button>Test button</button>
      <a href="#">test anchor</a>
      <cds-navigation expanded>
        <cds-navigation-item>
          <a href="#">
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item active>
          <a href="#">
            Navigation Active
          </a>
        </cds-navigation-item>
        <cds-navigation-item selected>
          <a href="#">
            Navigation Selected
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#">
            Navigation Disabled
          </a>
        </cds-navigation-item>
        <cds-divider></cds-divider>
        <cds-navigation-item>
          <a href="#">
            Navigation Six
          </a>
        </cds-navigation-item>
      </cds-navigation>
      <button>Test button</button>
      <a href="#">test anchor</a>
    </div>
  `;
}

export function verticalIconLink() {
  return html`
    <div style="height: 500px">
      <cds-navigation expanded>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="user" size="sm"></cds-icon>
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="bolt" size="sm"></cds-icon>
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item active>
          <a href="#">
            <cds-icon shape="sad-face" size="sm"></cds-icon>
            Navigation Active
          </a>
        </cds-navigation-item>
        <cds-navigation-item selected>
          <a href="#">
            <cds-icon shape="shield" size="sm"></cds-icon>
            Navigation Selected
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#">
            <cds-icon shape="certificate" size="sm"></cds-icon>
            Navigation Disabled
          </a>
        </cds-navigation-item>
      </cds-navigation>
    </div>
  `;
}

export function collapsibleVerticalNavigation() {
  const onExpandChange = {
    handleEvent(e: Event) {
      const navigation = e.target as CdsNavigation;
      navigation.expanded = !navigation.expanded;
    },
  };

  return html`
    <div style="height: 500px">
      <cds-navigation expanded @expandedChange="${onExpandChange}">
        <cds-navigation-start></cds-navigation-start>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="user" size="sm"></cds-icon>
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="bolt" size="sm"></cds-icon>
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item active>
          <a href="#">
            <cds-icon shape="sad-face" size="sm"></cds-icon>
            Navigation Active
          </a>
        </cds-navigation-item>
        <cds-navigation-item selected>
          <a href="#">
            <cds-icon shape="shield" size="sm"></cds-icon>
            Navigation Selected
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#">
            <cds-icon shape="certificate" size="sm"></cds-icon>
            Navigation Disabled
          </a>
        </cds-navigation-item>
      </cds-navigation>
    </div>
  `;
}

export function collapseWithOverflow() {
  const onExpandChange = {
    handleEvent(e: Event) {
      const navigation = e.target as CdsNavigation;
      navigation.expanded = !navigation.expanded;
      const substart = document.getElementById('substart');
      if (!navigation.expanded) {
        substart.style.display = 'none';
      } else {
        substart.style.display = 'unset';
      }
    },
  };

  return html`
    <div style="height: 350px">
      <cds-navigation expanded @expandedChange="${onExpandChange}">
        <cds-navigation-start></cds-navigation-start>
        <div slot="cds-navigation-substart" id="substart">
          <cds-input layout="vertical" cds-layout="m-t:md p-x:md">
            <label>Search</label>
            <input placeholder="Filter stuffs" type="text" />
            <cds-control-message>Filter navigation</cds-control-message>
          </cds-input>
          <cds-divider cds-layout="m-y:md"></cds-divider>
        </div id+>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="user" size="sm"></cds-icon>
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="bolt" size="sm"></cds-icon>
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item active>
          <a href="#">
            <cds-icon shape="sad-face" size="sm"></cds-icon>
            Navigation Active
          </a>
        </cds-navigation-item>
        <cds-navigation-item selected>
          <a href="#">
            <cds-icon shape="shield" size="sm"></cds-icon>
            Navigation Selected
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#">
            <cds-icon shape="certificate" size="sm"></cds-icon>
            Navigation Disabled
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="user" size="sm"></cds-icon>
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="bolt" size="sm"></cds-icon>
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="user" size="sm"></cds-icon>
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="bolt" size="sm"></cds-icon>
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="user" size="sm"></cds-icon>
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="bolt" size="sm"></cds-icon>
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="user" size="sm"></cds-icon>
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            <cds-icon shape="bolt" size="sm"></cds-icon>
            Navigation Two
          </a>
        </cds-navigation-item>
        <div slot="cds-navigation-end">
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <cds-navigation-item>
            <a href="#">
              <cds-icon shape="lightning" size="sm"></cds-icon>
              Navigation End
            </a>
          </cds-navigation-item>
        </div>
      </cds-navigation>
    </div>
  `;
}

export function verticalBasicSubStart() {
  return html`
    <div style="height:25rem">
      <cds-navigation expanded>
        <div slot="cds-navigation-substart">
          <cds-input layout="vertical" cds-layout="m-t:md p-x:md">
            <label>Search</label>
            <input placeholder="Filter stuffs" type="text" />
            <cds-control-message>Filter navigation</cds-control-message>
          </cds-input>
          <cds-divider cds-layout="m-y:md"></cds-divider>
        </div>
        <cds-navigation-item>
          <a href="#">
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item active>
          <a href="#">
            Navigation Active
          </a>
        </cds-navigation-item>
        <cds-navigation-item selected>
          <a href="#">
            Navigation Selected
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#">
            Navigation Disabled
          </a>
        </cds-navigation-item>
        <cds-divider></cds-divider>
        <cds-navigation-item>
          <a href="#">
            Navigation Six
          </a>
        </cds-navigation-item>
        <cds-divider></cds-divider>
        <cds-navigation-item>
          <a href="#">
            Navigation Seven
          </a>
        </cds-navigation-item>
      </cds-navigation>
    </div>
  `;
}

export function verticalAlignBottom() {
  return html`
    <div style="height:25rem">
      <cds-navigation expanded>
        <div slot="cds-navigation-substart">
          <cds-input layout="vertical" cds-layout="m-t:md p-x:md">
            <label>Search</label>
            <input placeholder="Filter stuffs" type="text" />
            <cds-control-message>Filter navigation</cds-control-message>
          </cds-input>
          <cds-divider cds-layout="m-y:md"></cds-divider>
        </div>
        <cds-navigation-item>
          <a href="#">
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item active>
          <a href="#">
            Navigation Active
          </a>
        </cds-navigation-item>
        <cds-navigation-item selected>
          <a href="#">
            Navigation Selected
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#">
            Navigation Disabled
          </a>
        </cds-navigation-item>
        <cds-divider></cds-divider>
        <cds-navigation-item>
          <a href="#">
            Navigation Six
          </a>
        </cds-navigation-item>
        <cds-divider cds-layout="align:bottom"></cds-divider>
        <cds-navigation-item>
          <a href="#">
            Navigation align:bottom
          </a>
        </cds-navigation-item>
      </cds-navigation>
    </div>
  `;
}

export function verticalEnd() {
  return html`
    <div style="height: 400px">
      <div cds-layout="horizontal wrap:none" style="height: 100%">
        <cds-navigation expanded>
          <div slot="cds-navigation-substart">
            <cds-input layout="vertical" cds-layout="m-t:md p-x:md">
              <label>Search</label>
              <input placeholder="Filter stuffs" type="text" />
              <cds-control-message>Filter navigation</cds-control-message>
            </cds-input>
            <cds-divider cds-layout="m-y:md"></cds-divider>
          </div>
          <cds-navigation-item>
            <a href="#">
              Navigation One
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Navigation Two
            </a>
          </cds-navigation-item>
          <cds-navigation-item active>
            <a href="#">
              Navigation Active
            </a>
          </cds-navigation-item>
          <cds-navigation-item selected>
            <a href="#">
              Navigation Selected
            </a>
          </cds-navigation-item>
          <cds-navigation-item disabled>
            <a href="#">
              Navigation Disabled
            </a>
          </cds-navigation-item>
          <cds-divider></cds-divider>
          <cds-navigation-item>
            <a href="#">
              Navigation Six
            </a>
          </cds-navigation-item>
          <div slot="cds-navigation-end">
            <cds-divider cds-layout="align:bottom"></cds-divider>
            <cds-navigation-item>
              <a href="#">
                Navigation End
              </a>
            </cds-navigation-item>
          </div>
        </cds-navigation>
        <div style="background: hsla(55, 50%, 50%, 0.5); height: 100%; width: 100%;">content</div>
      </div>
    </div>
  `;
}

export function navigationGroups() {
  const onExpandChange = {
    handleEvent(e: Event) {
      const navigation = e.target as CdsNavigation;
      navigation.expanded = !navigation.expanded;
    },
  };

  const onExpandGroupChange = {
    handleEvent(e: Event) {
      const group = e.target as CdsNavigationGroup;
      group.expanded = !group.expanded;
    },
  };

  return html`
    <div style="height: 600px" cds-layout="vertical gap:md">
      <a href="#">I'm tabbable</a>
      <div cds-layout="horizontal wrap:none" style="height: 100%">
        <cds-navigation @expandedChange="${onExpandChange}">
          <cds-navigation-start>
            Start Text
          </cds-navigation-start>
          <cds-navigation-item disabled>
            <a href="#"> <cds-icon shape="user" size="sm"></cds-icon> bottom </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#"> <cds-icon shape="user" size="sm"></cds-icon> bottom </a>
          </cds-navigation-item>
          <cds-divider></cds-divider>
          <cds-navigation-group expanded active @expandedChange="${onExpandGroupChange}">
            <cds-navigation-start>
              <cds-icon shape="user" size="sm"></cds-icon>
              Group One
            </cds-navigation-start>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="user" size="sm"></cds-icon>
                Navigation One
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="bolt" size="sm"></cds-icon>
                Navigation Two
              </a>
            </cds-navigation-item>
            <cds-navigation-item active>
              <a href="#">
                <cds-icon shape="sad-face" size="sm"></cds-icon>
                Navigation Active
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="shield" size="sm"></cds-icon>
                Navigation Selected
              </a>
            </cds-navigation-item>
            <cds-navigation-item disabled>
              <a href="#">
                <cds-icon shape="certificate" size="sm"></cds-icon>
                Navigation Disabled
              </a>
            </cds-navigation-item>
          </cds-navigation-group>
          <cds-navigation-group @expandedChange="${onExpandGroupChange}">
            <cds-navigation-start>
              <cds-icon shape="user" size="sm"></cds-icon>
              Group One
            </cds-navigation-start>
            <cds-navigation-item cds-layout="align:horizontal-center">
              <a href="#">
                <cds-icon shape="user" size="sm"></cds-icon>
                Navigation One
              </a>
            </cds-navigation-item>
            <cds-navigation-item disabled>
              <a href="#">
                <cds-icon shape="bolt" size="sm"></cds-icon>
                Navigation Two
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="sad-face" size="sm"></cds-icon>
                Navigation Active
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="shield" size="sm"></cds-icon>
                Navigation Selected
              </a>
            </cds-navigation-item>
            <cds-navigation-item disabled>
              <a href="#">
                <cds-icon shape="certificate" size="sm"></cds-icon>
                Navigation Disabled
              </a>
            </cds-navigation-item>
          </cds-navigation-group>
          <cds-divider></cds-divider>
          <cds-navigation-item cds-layout="align:bottom">
            <a href="#"> <cds-icon shape="user" size="sm"></cds-icon> bottom </a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-end">
            <a href="#">
              <cds-icon shape="cog" size="sm"></cds-icon>
              nav end slot
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <div style="background: hsla(55, 50%, 50%, 0.5); height: 100%;" cds-layout="vertical p:sm gap:sm align:stretch">
          content
          <a href="#">I'm tabbable</a>
          <a href="#">I'm tabbable</a>
          <a href="#">I'm tabbable</a>
        </div>
      </div>
      <a href="#">I'm tabbable</a>
    </div>
  `;
}
