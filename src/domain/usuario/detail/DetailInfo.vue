<template>
  <fab-panel-toggle title="usuario.detail.info" :filterOpened="true">
    <v-row dense>
      <fab-detail-static-field
        :lg="4"
        label="sample.view.field1"
        :value="fields.id"
      />
      <fab-detail-static-field
        :lg="4"
        label="sample.view.field2"
        :value="fields.email"
      />
      <fab-detail-static-field
        :lg="4"
        label="sample.view.field3"
        :value="fields.nome"
      />
      <fab-detail-static-field
        :lg="4"
        label="sample.view.field4"
        :value="fields.dataCriacao | formatDate"
      />
      <fab-detail-static-field
        :lg="4"
        label="sample.view.field5"
        :value="fields.dataNascimento | formatDate('DD-MM-YYYY')"
      />
      <fab-detail-static-field
        :lg="4"
        label="sample.view.field6"
        :value="filiais.find((i) => i.value === fields.filial).text"
      />
      <fab-detail-static-field
        :lg="4"
        label="sample.view.field7"
        :value="cargos.find((i) => i.value === fields.cargo).text"
      />
      <fab-detail-static-field
        :lg="4"
        label="sample.view.field8"
        :value="cidades.find((i) => i.value === fields.cidadenascimento).text"
      />
      <fab-detail-static-field
        :lg="4"
        label="sample.view.field9"
        :value="fields.salario | formatCurrency"
      />
    </v-row>
  </fab-panel-toggle>
</template>

<script>
import FabPanelToggle from '@/components/fab/panel/FabPanelToggle.vue';
import FabDetailStaticField from '@/components/fab/fields/FabDetailStaticField.vue';
import Usuario from '../type/Usuario';
import fakeForm from '../fakeData/form1.json';

export default {
  components: { FabPanelToggle, FabDetailStaticField },
  data() {
    return {
      fields: new Usuario(),
      menuDataCriacao: false,
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
  created() {
    this.fields = fakeForm;
  },
};
</script>
