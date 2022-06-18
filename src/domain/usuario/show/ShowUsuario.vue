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

    <detail-info />
    <actions-navigation
      @selectedActionNavMenu="toggleDetails"
      :active-component="activeComponent"
    >
      <component v-bind:is="activeComponent" @setStep="nextPage" />
    </actions-navigation>
  </div>
</template>

<script>
import ActionsNavigation from '../nav/ActionsNavigation.vue';
import DetailInfo from '../detail/DetailInfo.vue';
import Detail1 from '../detail/Detail1.vue';
import Detail2 from '../detail/Detail2.vue';
import Detail3 from '../detail/Detail3.vue';
import Detail4 from '../detail/Detail4.vue';
import Detail5 from '../detail/Detail5.vue';
import Detail6 from '../detail/Detail6.vue';
import DetailHistoric from '../detail/DetailHistoric.vue';

export default {
  components: {
    DetailInfo,
    ActionsNavigation,
    Detail1,
    Detail2,
    Detail3,
    Detail4,
    Detail5,
    Detail6,
    DetailHistoric,
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
