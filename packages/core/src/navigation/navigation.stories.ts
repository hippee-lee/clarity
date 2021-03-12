/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/navigation/register.js';
import { getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';
import { html } from 'lit-html';

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

export function basicVertical() {
  return html`
    <div cds-layout="vertical gap:md">
      <h1>Hello Navigation 🧭</h1>
      <div cds-layout="horizontal wrap:none gap:md" style="height: 50vh; /*box-shadow: 0 0 0 4px deeppink*/">
        <!-- Body + footer -->
        <cds-navigation expanded>
          <cds-navigation-group cds-layout="m-t:md">
            <cds-navigation-header>
              NavGroup 1
              <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
            </cds-navigation-header>
            <cds-navigation-item>
              <a href="#">
                grp 1.1
                <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">grp 1.2</a>
            </cds-navigation-item>
            <cds-navigation-group>
              <cds-navigation-header>
                NestedNavGroup 2
                <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
              </cds-navigation-header>
              <cds-navigation-item>
                <a href="#" cds-layout="horizontal">
                  grp 2.1
                  <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
                </a>
              </cds-navigation-item>
              <cds-navigation-item>
                <a href="#">grp 2.2</a>
              </cds-navigation-item>
              <cds-navigation-group>
                <cds-navigation-header>
                  NestedNestedNavGroup 3
                  <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
                </cds-navigation-header>
                <cds-navigation-item>
                  <a href="#" cds-layout="horizontal">
                    grp 3.1
                    <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
                  </a>
                </cds-navigation-item>
                <cds-navigation-item>
                  <a href="#">grp 3.2</a>
                </cds-navigation-item>
              </cds-navigation-group>
            </cds-navigation-group>
          </cds-navigation-group>
          <cds-divider cds-layout="m-y:md"></cds-divider>
          <cds-navigation-item>
            <a href="#" cds-layout="horizontal m-x:md">
              <span>desktop 2</span>
              <cds-icon cds-layout="align:right" shape="home" size="md"></cds-icon>
            </a>
          </cds-navigation-item>
          <cds-navigation-group cds-layout="vertical gap:md align:bottom">
            <cds-navigation-header>grp header</cds-navigation-header>
            <cds-navigation-item>
              <a href="#">
                navigation bottom
                <cds-icon shape="home" size="md"></cds-icon>
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">link</a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#" cds-layout="horizontal">
                <span>desktop</span>
                <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
              </a>
            </cds-navigation-item>
          </cds-navigation-group>
          <cds-navigation-item slot="cds-navigation-footer" cds-layout="align:bottom">
            <a href="#">align:bottom link (no footer)</a>
          </cds-navigation-item>
        </cds-navigation>
        <!-- Body + footer -->
        <cds-navigation layout="vertical" expanded>
          <cds-navigation-header>
            Header, no footer
            <cds-icon cds-layout="align:right" shape="angle" size="md"></cds-icon>
          </cds-navigation-header>
          <cds-navigation-group expanded>
            <cds-navigation-header>grp header</cds-navigation-header>
            <cds-navigation-item>
              <cds-icon shape="home" size="md"></cds-icon>
              <a href="#">grp 1</a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">grp 2</a>
            </cds-navigation-item>
          </cds-navigation-group>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item cds-layout="align:bottom">
            <a href="#">align:bottom link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">last link</a>
          </cds-navigation-item>
        </cds-navigation>
        <!-- Body + footer -->
        <cds-navigation layout="vertical" expanded>
          <cds-navigation-item>
            <a href="#">footer no header</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item cds-layout="align:bottom">
            <a href="#">align:bottom link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#">footer link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#">Footer link</a>
          </cds-navigation-item>
        </cds-navigation>
        <!-- Header + body + footer -->
        <cds-navigation expanded>
          <cds-navigation-header>
            Header & footer
            <cds-icon shape="link" direction="left" size="md"></cds-icon>
          </cds-navigation-header>
          <div slot="cds-navigation-subheader">
            <cds-divider></cds-divider>
            <cds-input layout="vertical" cds-layout="m-t:md">
              <label>Search</label>
              <input type="text" />
              <cds-control-message>Filter navigation</cds-control-message>
            </cds-input>
            <cds-divider cds-layout="m-t:md"></cds-divider>
          </div>
          <cds-navigation-group>
            <cds-navigation-header>
              NavGroup 1
              <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
            </cds-navigation-header>
            <cds-navigation-item>
              <a href="#" cds-layout="horizontal">
                grp 1.1
                <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">grp 1.2</a>
            </cds-navigation-item>
            <cds-navigation-group>
              <cds-navigation-header>
                NestedNavGroup 2
                <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
              </cds-navigation-header>
              <cds-navigation-item>
                <a href="#" cds-layout="horizontal">
                  grp 2.1
                  <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
                </a>
              </cds-navigation-item>
              <cds-navigation-item>
                <a href="#">grp 2.2</a>
              </cds-navigation-item>
              <cds-navigation-group>
                <cds-navigation-header>
                  NestedNestedNavGroup 3
                  <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
                </cds-navigation-header>
                <cds-navigation-item>
                  <a href="#" cds-layout="horizontal">
                    grp 3.1
                    <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
                  </a>
                </cds-navigation-item>
                <cds-navigation-item>
                  <a href="#">grp 3.2</a>
                </cds-navigation-item>
              </cds-navigation-group>
            </cds-navigation-group>
          </cds-navigation-group>
          <cds-navigation-item>
            <a href="#">link <cds-icon shape="home" size="md"></cds-icon></a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link <cds-icon shape="home" size="md"></cds-icon></a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-divider slot="cds-navigation-footer"></cds-divider>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#">footer link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#">Footer link</a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
      <div cds-layout="vertical wrap:none gap:md" style="height: 30vh; /*box-shadow: 0 0 0 4px deeppink*/">
        <!-- Body + footer -->
        <cds-navigation layout="horizontal" cds-layout="p:md">
          <cds-navigation-item>Item 1</cds-navigation-item>
          <cds-navigation-group>
            <cds-navigation-header>
              NavGroup solo
              <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
            </cds-navigation-header>
            <cds-navigation-item>
              <a href="#" cds-layout="horizontal">
                solo group item
                <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
              </a>
            </cds-navigation-item>
          </cds-navigation-group>
          <cds-navigation-item>
            <a href="#">
              <cds-icon shape="home" size="md" cds-layout="m-x:lg"></cds-icon>
              no header, no footer
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>

          <cds-navigation-item cds-layout="align:right">
            <a href="#" style="width: 100%">
              align:right
              <cds-icon shape="cog" size="md" cds-layout="m-x:md"></cds-icon>
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <!-- Body + footer -->
        <cds-navigation layout="horizontal" cds-layout="p:md">
          <cds-navigation-header>
            Header, no footer
          </cds-navigation-header>
          <cds-navigation-item>
            <a href="#">
              <cds-icon shape="home" size="md" cds-layout="m-x:lg"></cds-icon>
              link
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>

          <cds-navigation-item cds-layout="align:right">
            <a href="#" style="width: 100%">
              last link
              <cds-icon shape="cog" size="md" cds-layout="m-x:md"></cds-icon>
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <!-- Body + footer -->
        <cds-navigation layout="horizontal" cds-layout="p:md">
          <cds-navigation-item>
            <a href="#">
              <cds-icon shape="home" size="md" cds-layout="m-x:lg"></cds-icon>
              Footer, no header
            </a>
          </cds-navigation-item>
          <cds-divider orientation="vertical" cds-layout="m-x:md"></cds-divider>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-group cds-layout="m-t:md">
            <cds-navigation-header>
              NavGroup 1
              <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
            </cds-navigation-header>
            <cds-navigation-item>
              <a href="#" cds-layout="horizontal">
                grp 1.1
                <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">grp 1.2</a>
            </cds-navigation-item>
            <cds-navigation-group>
              <cds-navigation-header>
                NestedNavGroup 2
                <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
              </cds-navigation-header>
              <cds-navigation-item>
                <a href="#" cds-layout="horizontal">
                  grp 2.1
                  <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
                </a>
              </cds-navigation-item>
              <cds-navigation-item>
                <a href="#">grp 2.2</a>
              </cds-navigation-item>
              <cds-navigation-group>
                <cds-navigation-header>
                  NestedNestedNavGroup 3
                  <cds-icon shape="cog" size="md" cds-layout="align:right"></cds-icon>
                </cds-navigation-header>
                <cds-navigation-item>
                  <a href="#" cds-layout="horizontal">
                    grp 3.1
                    <cds-icon shape="home" size="md" cds-layout="align:right"></cds-icon>
                  </a>
                </cds-navigation-item>
                <cds-navigation-item>
                  <a href="#">grp 3.2</a>
                </cds-navigation-item>
              </cds-navigation-group>
            </cds-navigation-group>
          </cds-navigation-group>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#" style="width: 100%">
              footer here
              <cds-icon shape="cog" size="md" cds-layout="m-x:md"></cds-icon>
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <!-- Header + body + footer -->
        <cds-navigation layout="horizontal" cds-layout="p:md">
          <cds-navigation-header>
            Header & footer
            <cds-icon shape="link" direction="left" size="md"></cds-icon>
          </cds-navigation-header>
          <cds-navigation-group expanded>
            <cds-navigation-header>grp header</cds-navigation-header>
            <cds-navigation-item>
              <cds-icon shape="home" size="md"></cds-icon>
              <a href="#">grp 1</a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">grp 2</a>
            </cds-navigation-item>
          </cds-navigation-group>
          <cds-navigation-item>
            <a href="#">
              <cds-icon shape="home" size="md" cds-layout="m-x:lg"></cds-icon>
              link
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer" cds-layout="align:right">
            <a href="#" style="width: 100%">
              footer link
              <cds-icon shape="cog" size="md" cds-layout="m-x:md"></cds-icon>
            </a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
    </div>
  `;
}

export function collapsedVertical() {
  return html`
    <cds-navigation>
      <cds-navigation-header>
        Header
      </cds-navigation-header>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
    </cds-navigation>
  `;
}

export function basicHorizontal() {
  return html`
    <cds-navigation layout="horizontal">
      <cds-navigation-header>
        Header
      </cds-navigation-header>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
    </cds-navigation>
  `;
}
