<template>
  <DocInset>
    <section cds-layout="vertical align:vertical-center gap:lg">
      <cds-accordion id="step-0">
        <cds-accordion-panel expanded>
          <cds-accordion-header id="step-2">Expanded accordion panel</cds-accordion-header>
          <cds-accordion-content id="step-3">
            <p cds-text="body">Expanded accordion content</p>
          </cds-accordion-content>
        </cds-accordion-panel>
        <cds-accordion-panel disabled id="step-4">
          <cds-accordion-header>Disabled accordion panel</cds-accordion-header>
          <cds-accordion-content>
            <p cds-text="body">Disabled accordion content</p>
          </cds-accordion-content>
        </cds-accordion-panel>
        <cds-accordion-panel id="step-1">
          <cds-accordion-header>Collapsed accordion panel</cds-accordion-header>
          <cds-accordion-content>
            <p cds-text="body">Collapsed accordion content</p>
          </cds-accordion-content>
        </cds-accordion-panel>
      </cds-accordion>
      <v-tour name="accordionTour" :steps="steps"></v-tour>
      <cds-button size="sm" action="outline" v-on:click="startTour()">Start Tour</cds-button>
    </section>
  </DocInset>
</template>

<script>
export default {
  name: 'TourAccordion',
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
            title: 'Accordion Container',
          },
          content: `All accordion steps are inside the main container.`,
          params: {
            enableScrolling: false,
            placement: 'top',
          },
        },
        {
          target: '#step-1',
          header: {
            title: 'Accordion Panel',
          },
          content: 'Accordion panels can be expanded.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#step-2',
          header: {
            title: 'Accordion Header',
          },
          content: 'Accordion panels have a header slot.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#step-3',
          header: {
            title: 'Accordion Content',
          },
          content: 'Accordion panels have a content slot.',
          params: {
            enableScrolling: false,
          },
        },
        {
          target: '#step-4',
          header: {
            title: 'Disabled Accordion Panel',
          },
          content: 'Accordion panels can be disabled.',
          params: {
            enableScrolling: false,
          },
        },
      ],
    };
  },
  methods: {
    startTour: function () {
      this.$tours['accordionTour'].start();
    },
  },
};
</script>
