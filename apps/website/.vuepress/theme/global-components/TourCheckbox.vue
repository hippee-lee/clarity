<template>
  <DocInset>
    <section cds-layout="vertical gap:lg align:center">
      <form action="">
        <cds-form-group id="checkbox-tour" layout="horizontal">
          <cds-checkbox-group layout="horizontal">
            <label id="checkbox-step-0">Group label</label>
            <cds-checkbox>
              <label id="checkbox-step-2">Checkbox label</label>
              <input id="checkbox-step-1" type="checkbox" checked />
            </cds-checkbox>
            <cds-checkbox>
              <label>Checkbox label</label>
              <input type="checkbox" />
            </cds-checkbox>
            <cds-checkbox>
              <label>Checkbox label</label>
              <input type="checkbox" />
            </cds-checkbox>
            <cds-control-message id="checkbox-step-3">
              Supplemental text
            </cds-control-message>
          </cds-checkbox-group>
          <div id="checkbox-step-3" cds-layout="horizontal align:stretch"></div>
        </cds-form-group>
      </form>
      <v-tour name="checkboxTour" :steps="steps"></v-tour>
      <cds-button size="sm" action="outline" v-on:click="startTour()">Start Tour</cds-button>
    </section>
  </DocInset>
</template>

<script>
export default {
  name: 'TourCheckbox',
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
          target: '#checkbox-tour label', // The shadow DOM is tricky.
          header: {
            title: 'Checkbox Group Label',
          },
          content: `Describes the list of related checkboxes for user comprehension.`,
          params: {
            enableScrolling: false,
            placement: 'top',
          },
        },
        {
          target: '#checkbox-tour input', // The shadow DOM is tricky.
          header: {
            title: 'Checkbox Input',
          },
          content: 'Users users interact to check and uncheck the option.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#checkbox-step-2', // The shadow DOM is tricky so we trick back.
          header: {
            title: 'Checkbox Label',
          },
          content: 'Describes a specific option.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#checkbox-step-3',
          header: {
            title: 'Checkbox Supplemental Text',
          },
          content: 'Additional text to provide context and information to the user.',
          params: {
            enableScrolling: false,
          },
        },
      ],
    };
  },
  methods: {
    startTour: function () {
      this.$tours['checkboxTour'].start();
    },
  },
};
</script>
