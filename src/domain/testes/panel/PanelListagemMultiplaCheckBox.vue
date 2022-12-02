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
              <strong v-html="item.name"></strong>
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
            @item-selected="itensSelect($event)"
          >
            <template v-slot:[`header.data-table-select`]="{ on, props }">
              <!-- <v-checkbox
                :input-value="teste(props.value, index)"
                :indeterminate="props.indeterminate"
                @change="on.input"
              >
              </v-checkbox> -->
              <!-- <v-simple-checkbox
                color="purple"
                v-bind="props"
                v-on="on"
                v-ripple
              ></v-simple-checkbox> -->
              <v-checkbox
                :input-value="props.value"
                :indeterminate="props.indeterminate"
                @change="on.input"
                v-model="check"
              >
              </v-checkbox>
              <!-- updateCheckall: function(){
      if(this.languages.length == this.langsdata.length){
         this.isCheckAll = true;
      }else{
         this.isCheckAll = false;
      }
    }, -->

              <!-- <v-simple-checkbox
                color="purple"
                :input-value="props.value"
                :indeterminate="props.indeterminate"
                v-ripple
              ></v-simple-checkbox> -->
            </template>
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
      selected: [],
      selectAll: [],
      singleSelect: false,
      showSelect: true,
      checkbox: [],
      check: '',
    };
  },
  methods: {
    /**
     * seleção de todas as linhas da tabela
     * @params event
     * @params index da tabela
     */
    allRowsChanged(event, index) {
      console.log('allRowsChanged: ', index);
      this.checkbox[index] = event.value;
      this.selectAll[index] = event.value;
    },
    /**
     * check box externo
     * @params
     */
    // eslint-disable-next-line no-unused-vars
    checkBoxChange(event, data, index) {
      // console.log('checkBoxChange');
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
    // eslint-disable-next-line no-unused-vars
    enterSelect(items, data, index) {
      // // console.log('-------------------------');
      // console.log('enterSelect: ', index);
      // console.log(data.length);
      // console.log(items.length);
      // // if (items.length == this.itemsPerPage || items.length == data.length) {
      // //   this.selectAll[index] = true;
      // //   this.checkbox[index] = true;
      // // } else {
      // //   this.selectAll[index] = false;
      // //   this.checkbox[index] = false;
      // // }
      // // Verifica se possui tamanho para emitir comando ao componente pai.
      // if (this.selected.length > 0) {
      //   this.$emit('habilaInsercao', true);
      // } else {
      //   this.$emit('habilaInsercao', false);
      // }
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
    // eslint-disable-next-line no-unused-vars
    itensSelect(event) {
      // console.log(event);
    },
    // eslint-disable-next-line no-unused-vars
    teste(props, index) {
      console.log(props);
      this.checkbox[index] = props.value;
      return props;
    },
  },
  watch: {
    dataTable(newValue) {
      this.selectAll = new Array(newValue.length).fill(false);
    },
    check(newValue) {
      console.log(newValue);
    },
  },
};
</script>
