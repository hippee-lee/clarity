<template>
  <DocInset>
    <section cds-layout="vertical gap:lg align:center">
      <cds-badge color="gray" id="badge-step-0">
        <span id="badge-step-1"></span>1
        <span cds-layout="display:screen-reader-only">item.</span>
      </cds-badge>
      <v-tour name="badgeTour" :steps="steps"></v-tour>
      <cds-button size="sm" action="outline" v-on:click="startTour()">Start Tour</cds-button>
    </section>
  </DocInset>
</template>

<script>
export default {
  name: 'TourBadge',
  data() {
    return {
      myOptions: {
        labels: {
          buttonSkip: 'Skip tour',
          buttonPrevious: 'Previous',
          buttonNext: 'Next',
          buttonStop: 'Finish',
        },
      },
      steps: [
        {
          target: '#badge-step-0',
          header: {
            title: 'Badge Container',
          },
          content: `The badge container has a more rounded border radius, similar to labels, to distinguish them from primary buttons.`,
          params: {
            enableScrolling: false,
            placement: 'top',
          },
        },
        {
          target: '#badge-step-1',
          header: {
            title: 'Badge Label',
          },
          content: 'Use integers as labels within badges.',
          params: {
            enableScrolling: false,
          },
        },
      ],
    };
  },
  methods: {
    startTour: function () {
      this.$tours['badgeTour'].start();
    },
  },
};
</script>
