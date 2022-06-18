<template>
  <div>
    <fab-data-table
      :headers="headers"
      :items="staticData"
      :items-per-page="10"
      :page="1"
      :optionsTable="options"
      :loadRowsAtStart="true"
      :stickyLastColumn="false"
      :showSelect="true"
      :serverItemsLength="staticData.length"
      :length="2"
      v-model="selectData"
      @input="set"
      :itemKey="staticData.id"
    >
      <template v-slot:[`item.action`]="{ item }">
        <v-btn
          icon
          :to="{ name: 'show-usuario', params: { id: item.id } }"
          plain
        >
          <v-icon>mdi-magnify </v-icon>
        </v-btn>
      </template>
      <template v-slot:[`item.dataCriacao`]="{ item }">
        <div>{{ item.dataCriacao | formatDate }}</div>
      </template>
      <template v-slot:[`item.salario`]="{ item }">
        <div>{{ item.salario | formatCurrency }}</div>
      </template>
      <template v-slot:[`item.filial`]="{ item }">
        <div>{{ filiais.find((i) => i.value === item.filial).text }}</div>
      </template>
      <template v-slot:[`item.cargo`]="{ item }">
        <div>{{ cargos.find((i) => i.value === item.cargo).text }}</div>
      </template>
    </fab-data-table>
    <!-- <h5>Selected: {{ selectData }}</h5> -->
  </div>
</template>

<script>
import FabDataTable from '@/components/fab/table/FabDataTable.vue';
import columns from './columns';
import fakeData from '../fakeData/dataTable.json';
import { mapActions } from 'vuex';

export default {
  components: { FabDataTable },
  data() {
    return {
      selectData: {},
      headers: columns,
      options: {},
      select: 1,
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
    };
  },

  created() {
    this.options = this.optionsTable;
  },
  methods: {
    ...mapActions('testes', ['setSelectData']),
    set(e) {
      this.setSelectData(e);
    },
  },
};
</script>
