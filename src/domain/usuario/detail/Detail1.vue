<template>
  <fab-panel-toggle title="usuario.detail.detail1" :filterOpened="true">
    <v-form>
      <v-row dense>
        <v-col cols="12" md="12">
          <v-textarea
            dense
            rows="2"
            outlined
            name="input-7-4"
            :label="$t('sample.form.field1')"
            :value="field1"
          ></v-textarea>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            :label="$t('sample.form.field2')"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="field3"
            :label="$t('sample.form.field3')"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="field4"
            :label="$t('sample.form.field4')"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-menu
            v-model="menudate"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                dense
                :value="formatDate(field5)"
                clearable
                :label="$t('sample.form.field5')"
                readonly
                v-bind="attrs"
                v-on="on"
                @click:clear="date = null"
                prepend-inner-icon="mdi-calendar"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="field5"
              @change="menudate = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            v-model="field6"
            :items="items"
            :label="$t('sample.form.field6')"
            clearable
            outlined
            dense
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            reverse
            v-model="field7"
            :label="$t('sample.form.field7')"
            type="number"
            @keyup="onlyNumber"
            step="1"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            reverse
            v-model="field8"
            prefix="R$"
            :label="$t('sample.form.field8')"
            type="number"
            v-format-with-two-decimal
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            reverse
            v-model="field9"
            :label="$t('sample.form.field9')"
            type="number"
            v-format-with-two-decimal
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end" dense>
        <v-btn color="success " dark class="mx-1 mb-1" @click="onSubmit" tile>
          {{ $t('save') }}
        </v-btn>
      </v-row>
    </v-form>
  </fab-panel-toggle>
</template>

<script>
import FabPanelToggle from '@/components/fab/panel/FabPanelToggle.vue';
import formatDateMixin from '@/mixins/formatDateMixin';

export default {
  name: 'Detail1',
  components: { FabPanelToggle },
  mixins: [formatDateMixin],
  data() {
    return {
      menudate: false,
      field1: 'Texto Exemplo',
      field3: 'Texto Exemplo',
      field4: 'Texto Exemplo',
      field5: '1998-12-07',
      field6: 'Opção 2',
      field7: 8,
      field8: 7.23,
      field9: 35.9,
      items: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    };
  },
  methods: {
    onlyNumber(e) {
      let re = /[^0-9]/g;
      this.field7 = e.target.value.replace(re, '');
    },
    onSubmit() {
      this.$emit('setStep', { step: 2, subPage: 'Detail2' });
    },
  },
};
</script>

<style lang="scss" scoped></style>
