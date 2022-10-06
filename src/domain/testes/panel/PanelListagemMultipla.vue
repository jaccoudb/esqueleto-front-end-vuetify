<template>
  <v-form ref="panel">
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-layout row>
            <v-card flat class="pl-2"
              ><v-checkbox
                v-model="selectAll"
                @click.native="check($event)"
                :ripple="false"
              ></v-checkbox>
            </v-card>
            <v-flex cols1></v-flex>
            <v-flex cols11 align-self-center="true" class="pr-2">
              <h3>0001/OPIA/2022</h3></v-flex
            >
          </v-layout>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="body"
            :single-select="singleSelect"
            show-select
            class="elevation-1"
            @toggle-select-all="allRowsChanged"
          >
          </v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      panel: [],
      singleSelect: false,
      selected: [],
      selectAll: false,

      headers: [
        {
          text: 'Plano Anual de Contratação',
          align: 'start',
          sortable: false,
          value: 'bodyAnualContratacao',
        },
        {
          text: 'Requisição',
          align: 'start',
          sortable: false,
          value: 'requisicao',
        },
        {
          text: 'Nomenclatura/Descrição',
          align: 'start',
          sortable: false,
          value: 'nomenclatura',
        },
        {
          text: 'ND',
          align: 'start',
          sortable: false,
          value: 'nd',
        },
        {
          text: 'Quantidade',
          align: 'start',
          sortable: false,
          value: 'quantidade',
        },
        {
          text: 'Valor de Referência',
          align: 'start',
          sortable: false,
          value: 'valorReferencia',
        },
        {
          text: 'Valor Total',
          align: 'start',
          sortable: false,
          value: 'valorTotal',
        },
        {
          text: 'Unidade Requisitante',
          align: 'start',
          sortable: false,
          value: 'unidade',
        },
      ],

      body: [
        {
          bodyAnualContratacao: '001/XXXX/2022',
          requisicao: 'ABC000001PP',
          nomenclatura: 'ORING',
          nd: 339040,
          quantidade: 2,
          valorReferencia: 'U$ 100.00',
          valorTotal: 'U$ 200.00',
          unidade: 'PAMALS',
        },
        {
          bodyAnualContratacao: '001/XXXX/2022',
          requisicao: 'ABC000004PP',
          nomenclatura: 'GLASS',
          nd: 339040,
          quantidade: 2,
          valorReferencia: 'U$ 410.00',
          valorTotal: 'U$ 820.00',
          unidade: 'PAMALS',
        },
        {
          bodyAnualContratacao: '001/XXXX/2022',
          requisicao: 'ABC000006PP',
          nomenclatura: 'KNOB',
          nd: 339040,
          quantidade: 5,
          valorReferencia: 'U$ 65.00',
          valorTotal: 'U$ 325.00',
          unidade: 'PAMALS',
        },
      ],
    };
  },
  methods: {
    check(event) {
      event.cancelBubble = true;
      if (this.selectAll) {
        for (let i in this.body) {
          this.selected.push(this.body[i]);
        }
      } else {
        this.selected = [];
      }
    },
    allRowsChanged(event) {
      this.selectAll = event.value;
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
  },
};
</script>
