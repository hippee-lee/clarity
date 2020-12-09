<template>
  <DocInset>
    <section cds-layout="vertical align:vertical-center gap:lg">
      <cds-alert-group status="success" type="default" id="step-0">
        <cds-alert closable>
          <cds-icon id="step-1" size="lg" shape="check-circle"></cds-icon>
          <span id="step-2">Success</span>
          <cds-alert-actions>
            <cds-button id="step-3">Acknowledge</cds-button>
            <span id="step-4"></span>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
      <v-tour name="alertTourStandard" :steps="steps"></v-tour>
      <cds-button size="sm" action="outline" v-on:click="startTour()">Start Tour</cds-button>
    </section>
  </DocInset>
</template>

<script>
export default {
  name: 'TourAlertStandard',
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
          target: '#step-0',
          header: {
            title: 'Standard Alert Container',
          },
          content: `The element that contains the alert icon, message and buttons.`,
          params: {
            enableScrolling: false,
            placement: 'top',
          },
        },
        {
          target: '#step-1',
          header: {
            title: 'Standard Alert Icon',
          },
          content: 'Iconic representation for the type, status and content of the alert.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#step-2',
          header: {
            title: 'Standard Alert Message',
          },
          content: 'The message is left-aligned.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#step-3',
          header: {
            title: 'Standard Alert Button(s)',
          },
          content: 'Alert buttons are optional. An alert can have up to two actions and actions are right-aligned.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#step-4',
          header: {
            title: 'Standard Alert Dismiss Button',
          },
          content: 'The dismiss button is optional. The dismiss button is right-aligned',
          params: {
            enableScrolling: false,
            placement: 'left',
          },
        },
      ],
    };
  },
  methods: {
    startTour: function () {
      this.$tours['alertTourStandard'].start();
    },
  },
};
</script>
