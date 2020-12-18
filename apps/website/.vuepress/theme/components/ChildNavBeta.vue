<template>
  <span class="nav-text">
    {{ childItem.title }}
    <cds-icon
      aria-label="beta"
      status="info"
      solid
      v-if="isBeta"
      shape="beta"
      size="md"
      style="margin-left: -0.15rem; margin-top: -0.75rem;"
    ></cds-icon>
  </span>
</template>

<script>
export default {
  name: 'ChildNavBeta',
  props: ['child'],
  computed: {
    isBeta: function () {
      // use titles; easier for now...
      const betaItems = ['Progress Circle', 'Accordion', 'Divider', 'File', 'Search', 'Time'];
      return this.child.path.indexOf('web-components') > -1 && betaItems.indexOf(item.title) > -1;
    },
  },
};
</script>
