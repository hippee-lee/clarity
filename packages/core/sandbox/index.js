import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';
import '@cds/core/navigation/register.js';
import { ClarityIcons, boltIcon, certificateIcon, cogIcon, sadFaceIcon, shieldIcon, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(boltIcon);
ClarityIcons.addIcons(sadFaceIcon);
ClarityIcons.addIcons(shieldIcon);
ClarityIcons.addIcons(certificateIcon);
ClarityIcons.addIcons(cogIcon);

document.querySelector('cds-navigation').addEventListener('expandedChange', event => {
  const navigation = document.querySelector('cds-navigation');
  if (navigation.getAttribute('expanded') === '') {
    navigation.removeAttribute('expanded');
  } else {
    navigation.setAttribute('expanded', '');
  }
});

document.querySelector('#group1').addEventListener('expandedChange', event => {
  const group = document.querySelector('#group1');
  if (group.getAttribute('expanded') === '') {
    group.removeAttribute('expanded');
  } else {
    group.setAttribute('expanded', '');
  }
});

document.querySelector('#group2').addEventListener('expandedChange', event => {
  const group = document.querySelector('#group2');
  if (group.getAttribute('expanded') === '') {
    group.removeAttribute('expanded');
  } else {
    group.setAttribute('expanded', '');
  }
});
