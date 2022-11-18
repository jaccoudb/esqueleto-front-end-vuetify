<template>
  <v-form ref="panelRegistered">
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(item, index) in dataTable" :key="index">
        <v-expansion-panel-header>
          <v-layout row>
            <!-- Card Principal -->
            <v-card flat class="pl-2">
              <v-checkbox
                v-model="checkbox[index]"
                hide-details
                class="shrink mt-0"
                :ripple="false"
                @click.native="checkBoxChange($event, item.body, index)"
              >
              </v-checkbox>
            </v-card>
            <v-flex cols1></v-flex>
            <v-flex cols11 align-self-center="true" class="pr-2">
              <!-- <v-badge avatar icon="mdi-lock">
                <strong v-html="item.name"></strong>
              </v-badge> -->
              <strong v-html="item.name"></strong>
              <sup> <v-icon x-small>mdi-message</v-icon></sup>
              <sup> <v-icon x-small>mdi-chat-processing</v-icon></sup>

              <!-- <v-badge dark overlap content="new" color="blue">
                <v-icon dark x-large>mdi-email</v-icon>
              </v-badge> -->
            </v-flex>
          </v-layout>
        </v-expansion-panel-header>
        <!-- Conteúdo -->
        <v-expansion-panel-content>
          <v-data-table
            v-model="selected"
            must-sort
            :headers="headers"
            :items="item.body"
            item-key="name"
            :single-select="singleSelect"
            :show-select="showSelect"
            class="elevation-1"
            @toggle-select-all="allRowsChanged($event, index)"
            @input="enterSelect($event, item.body, index)"
          >
          </v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <hr />
    checkBox:
    {{ checkbox }}
    <hr />
    selectAll:
    {{ selectAll }}
    <hr />
    selected:
    {{ selected }}
  </v-form>
</template>

<script>
import sobremesaI from '../tables/sobremesaI.json';
import columns from '../tables/columnsSobremesa';

export default {
  computed: {
    dataTable() {
      return this.sobremesaI.dataTable;
    },
  },
  created() {
    this.headers = columns;
  },
  data() {
    return {
      headers: columns,
      sobremesaI: sobremesaI,
      itemsPerPage: 10,
      panel: [],
      selec: false,
      selected: [],
      selectAll: [],
      singleSelect: false,
      showSelect: true,
      checkbox: [],
      badg: false,
    };
  },
  methods: {
    /**
     * seleção de todas as linhas da tabela
     * @params event
     * @params index da tabela
     */
    allRowsChanged(event, index) {
      console.log('allRowsChanged');
      this.checkbox[index] = event.value;
      this.selectAll[index] = event.value;
    },
    /**
     * check box externo
     * @params
     */
    // eslint-disable-next-line no-unused-vars
    checkBoxChange(event, data, index) {
      event.cancelBubble = true;

      // Parâmetro de checkAll na tabela recebe o mesmo que do checkBox externo.
      this.selectAll[index] = this.checkbox[index];

      // Adiciona elementos da matriz na matriz selected, ou remove em caso checkBox seja negativo.
      if (this.selectAll[index] === true) {
        for (let i in data) {
          this.selected.push(data[i]);
        }
      } else {
        this.selected = this.selected.filter((a) => !data.includes(a));
      }
    },
    /**
     * Verifica a cada select da tabela.
     * @params items. Array of selected items
     * @params data. DataTable
     * @params index. Indice do panel.
     */
    enterSelect(items, data, index) {
      console.log('-------------------------');
      // console.log('enterSelect');
      // console.log(items);
      console.log(data.length);
      if (items.length == this.itemsPerPage || items.length == data.length) {
        this.selectAll[index] = true;
        this.checkbox[index] = true;
      } else {
        this.selectAll[index] = false;
        this.checkbox[index] = false;
      }

      // Verifica se possui tamanho para emitir comando ao componente pai.
      if (this.selected.length > 0) {
        this.$emit('habilaInsercao', true);
      } else {
        this.$emit('habilaInsercao', false);
      }
    },
    /**
     * Calcula o valor total da requisição. Multiplica valor pela quantidade.
     * @param {Number} quantidade
     * @param {Number} valor
     * @return {Number} total
     */
    getTotal(quantidade, valor) {
      return quantidade * valor;
    },
    itemSelected(event) {
      console.log(event);
    },
  },
  watch: {
    dataTable(newValue) {
      this.selectAll = new Array(newValue.length).fill(false);
    },
  },
};
</script>
