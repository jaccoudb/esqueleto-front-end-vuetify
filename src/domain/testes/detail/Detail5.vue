<template>
  <fab-panel-toggle title="usuario.detail.detail5" :filterOpened="true">
    <v-form>
      <v-row dense>
        <fab-detail-input-field
          :md="4"
          :lg="4"
          :label="$t('sample.view.field1')"
          :value="field1"
          showCopyText
        />
        <fab-detail-input-field
          :md="4"
          :lg="4"
          :label="$t('sample.view.field2')"
          :value="field2 | formatDate"
          copyTextOnClick
        />
        <fab-detail-input-field
          :md="4"
          :lg="4"
          :label="$t('sample.form.field10')"
        />
        <fab-detail-input-field
          :label="$t('sample.form.field8')"
          :value="field8 | formatPrices"
          copyTextOnClick
        />
      </v-row>
    </v-form>
  </fab-panel-toggle>
</template>

<script>
import FabPanelToggle from '@/components/fab/panel/FabPanelToggle.vue';
import FabDetailInputField from '@/components/fab/fields/FabDetailInputField.vue';
import Usuario from '../type/Usuario';

export default {
  name: 'Detail1',
  components: { FabPanelToggle, FabDetailInputField },
  data() {
    return {
      fields: new Usuario(),
      field1: 'Texto Exemplo',
      field2: '1998-12-07',
      field8: 132.15,
    };
  },
};
</script>
