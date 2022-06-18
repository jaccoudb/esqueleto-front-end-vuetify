<template>
  <div>
    <v-stepper v-model="e1" class="border-gray-light">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          {{ $t('usuario.steps.step1') }}
        </v-stepper-step>
        <v-stepper-step :complete="e1 > 2" step="2">
          {{ $t('usuario.steps.step2') }}
        </v-stepper-step>
        <v-stepper-step :complete="e1 > 3" step="3">
          {{ $t('usuario.steps.step3') }}
        </v-stepper-step>
        <v-stepper-step :complete="e1 > 4" step="4">
          {{ $t('usuario.steps.step4') }}
        </v-stepper-step>
        <v-stepper-step :complete="e1 > 5" step="5">
          {{ $t('usuario.steps.step5') }}
        </v-stepper-step>
        <v-stepper-step :complete="e1 > 6" step="6">
          {{ $t('usuario.steps.step6') }}
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>

    <DetailInfo />
    <!--  -->
  </div>
</template>

<script>
import DetailInfo from '../detail/DetailInfo.vue';

export default {
  components: {
    DetailInfo,
  },
  data() {
    return {
      e1: 1,
      activeComponent: 'Detail1',
    };
  },
  methods: {
    toggleDetails(e) {
      this.activeComponent = e;
    },
    nextPage(e) {
      this.e1 = e.step;
      this.activeComponent = e.subPage;
    },
  },
};
</script>
