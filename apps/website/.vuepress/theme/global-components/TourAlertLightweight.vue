<template>
  <DocInset>
    <section cds-layout="vertical align:vertical-center gap:lg">
      <cds-alert closable status="info" type="light">
        <span id="lightweight-step-0" style="position: absolute; top: 0; left: -0.6rem;"></span>
        <span id="lightweight-step-1">New release available.</span>
        <cds-inline-button id="lightweight-step-2">View Release Notes</cds-inline-button>
      </cds-alert>
      <v-tour name="alertTourLightweight" :steps="steps"></v-tour>
      <cds-button size="sm" action="outline" v-on:click="startTour()">Start Tour</cds-button>
    </section>
  </DocInset>
</template>

<script>
export default {
  name: 'TourAlertLightweight',
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
          target: '#lightweight-step-0',
          header: {
            title: 'Lightweight Alert Icon',
          },
          content: `The element that contains the alert icon, message and buttons.`,
          params: {
            enableScrolling: false,
            placement: 'top',
          },
        },
        {
          target: '#lightweight-step-1',
          header: {
            title: 'Lightweight Alert Message',
          },
          content: 'The message is left-aligned',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#lightweight-step-2',
          header: {
            title: 'Lightweight Alert Button',
          },
          content: 'An alert can have up to two actions. Actions are right-aligned.',
          params: {
            enableScrolling: false,
          },
        },
      ],
    };
  },
  methods: {
    startTour: function () {
      this.$tours['alertTourLightweight'].start();
    },
  },
};
</script>
