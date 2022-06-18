<template>
  <fab-panel-toggle title="usuario.detail.detail6" :filterOpened="true">
    <v-form>
      <v-sheet
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
      >
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-sheet>
      <v-row class="d-flex justify-end" dense>
        <v-btn color="blue " dark class="mx-1 mb-1" @click="onSubmit" tile>
          {{ $t('continue') }}
        </v-btn>
      </v-row>
    </v-form>
  </fab-panel-toggle>
</template>

<script>
import FabPanelToggle from '@/components/fab/panel/FabPanelToggle.vue';
export default {
  components: { FabPanelToggle },
  methods: {
    onSubmit() {
      this.$emit('setStep', { step: 6, subPage: 'DetailHistoric' });
    },
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
};
</script>
