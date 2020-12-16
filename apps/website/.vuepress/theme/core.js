import '@cds/core/accordion/register.js';
import '@cds/core/alert/register.js';
import '@cds/core/badge/register.js';
import '@cds/core/button/register.js';
import '@cds/core/checkbox/register.js';
import '@cds/core/datalist/register.js';
import '@cds/core/date/register.js';
import '@cds/core/divider/register.js';
import '@cds/core/file/register.js';
import '@cds/core/forms/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/input/register.js';
import '@cds/core/modal/register.js';
import '@cds/core/password/register.js';
import '@cds/core/progress-circle/register.js';
import '@cds/core/radio/register.js';
import '@cds/core/range/register.js';
import '@cds/core/search/register.js';
import '@cds/core/select/register.js';
import '@cds/core/tag/register.js';
import '@cds/core/textarea/register.js';
import '@cds/core/time/register.js';
import '@cds/core/toggle/register.js';

import {
  // load all icons
  CdsIcon,
  loadCoreIconSet,
  loadChartIconSet,
  loadEssentialIconSet,
  loadCommerceIconSet,
  loadMediaIconSet,
  loadSocialIconSet,
  loadTechnologyIconSet,
  loadTextEditIconSet,
  loadTravelIconSet,
  loadMiniIconSet,
} from '@cds/core/icon';

if (typeof window !== 'undefined') {
  loadCoreIconSet();
  loadChartIconSet();
  loadEssentialIconSet();
  loadCommerceIconSet();
  loadMediaIconSet();
  loadSocialIconSet();
  loadTechnologyIconSet();
  loadTextEditIconSet();
  loadTravelIconSet();
  loadMiniIconSet();
}

class LegacyIcon extends CdsIcon {}
customElements.define('clr-icon', LegacyIcon);
