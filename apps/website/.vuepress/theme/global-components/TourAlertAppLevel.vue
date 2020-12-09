<template>
  <DocInset>
    <section cds-layout="vertical align:vertical-center gap:lg" style="position: relative;">
      <cds-alert-group status="success" type="banner" id="app-step-0">
        <cds-alert closable>
          <cds-icon id="app-step-1" size="lg" shape="check-circle"></cds-icon>
          <span id="app-step-2">Success</span>
          <cds-alert-actions>
            <cds-button id="app-step-3">Acknowledge</cds-button>
          </cds-alert-actions>
        </cds-alert>
        <span style="position: absolute; top: 1rem; right: 2rem;" id="app-step-4"></span>
      </cds-alert-group>
      <v-tour name="alertTour" :steps="steps"></v-tour>
      <cds-button size="sm" action="outline" v-on:click="startTour()">Start Tour</cds-button>
    </section>
  </DocInset>
</template>

<script>
export default {
  name: 'TourAlertAppLevel',
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
          target: '#app-step-0',
          header: {
            title: 'App Level Alert Container',
          },
          content: `The element that contains the alert icon, message and buttons.`,
          params: {
            enableScrolling: false,
            placement: 'top',
          },
        },
        {
          target: '#app-step-1',
          header: {
            title: 'App Level Alert Icon',
          },
          content: 'Iconic representation for the type, status and content of the alert.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#app-step-2',
          header: {
            title: 'App Level Alert Message',
          },
          content: 'The message is center-aligned.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#app-step-3',
          header: {
            title: 'App Level Alert Button(s)',
          },
          content: 'Alert buttons are optional. An alert can have up to two actions and actions are center-aligned.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#app-step-4',
          header: {
            title: 'App Level Alert Dismiss Button',
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
      this.$tours['alertTour'].start();
    },
  },
};
</script>
