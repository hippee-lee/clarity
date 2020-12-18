<template>
  <cds-icon v-if="showIcon" :shape="shape"></cds-icon>
</template>

<script>
export default {
  name: 'DelayedIcon',
  props: ['shape'],
  data: function () {
    return {
      showIcon: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showIcon = true;
    });
  },
};
</script>
