<template>
  <DocInset>
    <section cds-layout="vertical gap:lg align:center">
      <form action="" style="position: relative;">
        <div cds-layout="vertical gap:lg" id="control-tour">
          <cds-control layout="vertical">
            <label id="control-step-0">label</label>
            <input id="control-step-1" placeholder="some custom control" />
            <cds-control-message>message text</cds-control-message>
          </cds-control>
          <div
            style="position: relative; bottom: 1.4rem;"
            id="control-step-2"
            cds-layout="horizontal align:stretch"
          ></div>
        </div>
      </form>
      <v-tour name="controlTour" :steps="steps"></v-tour>
      <cds-button size="sm" action="outline" v-on:click="startTour()">Start Tour</cds-button>
    </section>
  </DocInset>
</template>

<script>
export default {
  name: 'TourControl',
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
          target: '#control-step-0',
          header: {
            title: 'Control Label',
          },
          content: `Describes the form control.`,
          params: {
            enableScrolling: false,
            placement: 'top',
          },
        },
        {
          target: '#control-tour input', // Finding things in the shadow DOM is tricky.
          header: {
            title: 'Control Input',
          },
          content: 'Users interact with custom form inputs.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#control-step-2', // The shadow DOM is tricky so we trick back.
          header: {
            title: 'Control Supplemental Text',
          },
          content: 'Additional text to provide context and information to the user.',
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
      this.$tours['controlTour'].start();
    },
  },
};
</script>
