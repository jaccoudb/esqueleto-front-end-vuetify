<template>
  <v-form>
    <v-row dense>
      <v-col cols="12" sm="6" md="3" dense>
        <v-text-field
          v-model="form.id"
          :label="$t('sample.filter.field1')"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="form.email"
          :label="$t('sample.filter.field2')"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="form.nome"
          :label="$t('sample.filter.field3')"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-menu
          v-model="menuDataCriacao"
          :close-on-content-click="false"
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              outlined
              dense
              :value="computedDateFormattedMomentjs"
              clearable
              :label="$t('sample.filter.field4')"
              readonly
              v-bind="attrs"
              v-on="on"
              @click:clear="date = null"
              prepend-inner-icon="mdi-calendar"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="form.dataCriacao"
            @change="menuDataCriacao = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-menu
          v-model="menuDataNascimento"
          :close-on-content-click="false"
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              outlined
              dense
              :value="computedDateNascimentoFormattedMomentjs"
              clearable
              :label="$t('sample.filter.field5')"
              readonly
              v-bind="attrs"
              v-on="on"
              @click:clear="date = null"
              prepend-inner-icon="mdi-calendar"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="form.dataNascimento"
            @change="menuDataNascimento = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-select
          :items="filiais"
          :label="$t('sample.filter.field6')"
          clearable
          outlined
          dense
          multiple
          chips
          attach
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-select
          :items="filiais"
          :label="$t('sample.filter.field7')"
          clearable
          outlined
          dense
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-autocomplete
          :items="cidades"
          :label="$t('sample.filter.field8')"
          clearable
          outlined
          dense
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-end" dense>
      <v-btn color="grey" dark class="mx-1 mb-1" @click="onReset" tile>
        {{ $t('reset') }}
      </v-btn>
      <v-btn color="blue " dark class="mx-1 mb-1" @click="onSubmit" tile>
        {{ $t('search') }}
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import FilterUsuario from '../type/FilterUsuario';
import moment from 'moment';

const formatDate = function (date) {
  if (!date) return null;

  const [year, month, day] = date.split('-');

  return `${month}/${day}/${year}`;
};

export default {
  data() {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menuDataCriacao: false,
      menuDataNascimento: false,
      dateFormatted: formatDate(new Date().toISOString().substr(0, 10)),
      form: new FilterUsuario(),
      filiais: [
        { value: '1', text: 'Centro' },
        { value: '2', text: 'Centro' },
        { value: '3', text: 'Ilha do Governador' },
        { value: '4', text: 'Irajá' },
        { value: '5', text: 'Vila da Penha' },
      ],
      cargos: [
        { value: '1', text: 'Vendedor' },
        { value: '2', text: 'Gerente' },
        { value: '3', text: 'Contador' },
        { value: '4', text: 'Serviços Gerais' },
        { value: '5', text: 'Administrador' },
      ],
      cidades: [
        { value: '3304557', text: 'Rio de Janeiro' },
        { value: '3303302', text: 'Niterói' },
        { value: '3550308', text: 'São Paulo' },
        { value: '3548500', text: 'Santos' },
      ],
    };
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.form.dataCriacao
        ? moment(this.form.dataCriacao).format('DD MMMM YYYY')
        : '';
    },
    computedDateNascimentoFormattedMomentjs() {
      return this.form.dataNascimento
        ? moment(this.form.dataNascimento).format('DD/MM/YYYY')
        : '';
    },
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    onReset() {
      this.form = new FilterUsuario();
      console.log(this.form);
    },
  },
};
</script>
