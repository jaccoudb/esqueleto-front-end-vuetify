<template>
  <fab-panel-toggle title="usuario.detail.detail2" :filterOpened="true">
    <v-form>
      <form-usuario />
      <v-row class="d-flex justify-end" dense>
        <v-btn color="blue " dark class="my-1 mx-1 mb-1" @click="onSubmit" tile>
          {{ $t('continue') }}
        </v-btn>
      </v-row>
    </v-form>
  </fab-panel-toggle>
</template>

<script>
import FabPanelToggle from '@/components/fab/panel/FabPanelToggle.vue';
import FormUsuario from '../form/FormUsuario.vue';
export default {
  components: { FabPanelToggle, FormUsuario },
  methods: {
    onSubmit() {
      this.$emit('setStep', { step: 3, subPage: 'Detail3' });
    },
  },
};
</script>
