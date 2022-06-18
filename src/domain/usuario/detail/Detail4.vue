<template>
  <fab-panel-toggle title="usuario.detail.detail4" :filterOpened="true">
    <v-form>
      <v-row justify="space-around">
        <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
        <v-date-picker
          v-model="picker2"
          color="green lighten-1"
          header-color="primary"
        ></v-date-picker>
      </v-row>
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
      this.$emit('setStep', { step: 5, subPage: 'Detail5' });
    },
  },
};
</script>
