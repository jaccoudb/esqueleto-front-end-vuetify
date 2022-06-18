<template>
  <div class="py-1">
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in selectData" :key="i">
        <v-expansion-panel-header>
          <v-layout row>
            <v-flex cols1><v-icon></v-icon> </v-flex
            ><v-flex cols11>
              <h3>Item {{ item.id }}</h3></v-flex
            >
          </v-layout>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row dense>
            <fab-detail-input-field
              :lg="4"
              label="sample.view.field1"
              :value="item.nome"
            />
            <fab-detail-input-field
              :lg="4"
              label="sample.view.field2"
              :value="item.email"
            />
            <fab-detail-input-field
              :lg="4"
              label="sample.view.field3"
              :value="item.dataCriacao"
            />
            <fab-detail-input-field
              :lg="4"
              label="sample.view.field4"
              :value="item.dataNascimento"
            />
            <fab-detail-input-field
              :lg="4"
              label="sample.view.field5"
              :value="item.cidadenascimento"
            />
            <fab-detail-input-field
              :lg="4"
              label="sample.view.field6"
              :value="item.filial"
            />
            <fab-detail-input-field
              :lg="4"
              label="sample.view.field7"
              :value="item.cargo"
            />
            <fab-detail-input-field
              :lg="4"
              label="sample.view.field8"
              :value="item.salario"
            />
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FabPanelToggle from '@/components/fab/panel/FabPanelToggle.vue';
import FabDetailInputField from '@/components/fab/fields/FabDetailInputField.vue';
import Usuario from '../type/Usuario';
import fakeForm from '../fakeData/form1.json';
import fakeData from '../fakeData/dataTable.json';

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { FabPanelToggle, FabDetailInputField },
  computed: {
    ...mapState('testes', ['selectData']),
  },
  data() {
    return {
      fields: new Usuario(),
      menuDataCriacao: false,
      staticData: fakeData.data.content,
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
