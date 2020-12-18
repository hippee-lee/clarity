<template>
  <cds-icon
    v-if="showIcon"
    aria-label="beta"
    status="info"
    solid
    shape="beta"
    size="md"
    style="margin-left: -0.15rem; margin-top: -0.75rem;"
  ></cds-icon>
</template>

<script>
export default {
  name: 'NavLinkBetaTag',
  props: ['item'],
  data: function () {
    return {
      showIcon: false,
    };
  },
  mounted() {
    const betaItems = ['Progress Circle', 'Accordion', 'Divider', 'File', 'Search', 'Time'];
    setTimeout(() => {
      this.showIcon =
        this.item && this.item.path.indexOf('web-components') > -1 && betaItems.indexOf(this.item.title) > -1;
    });
  },
};
</script>
