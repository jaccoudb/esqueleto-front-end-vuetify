<template>
  <v-form ref="panelRegistered">
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(item, i) in dataTable" :key="i">
        <v-expansion-panel-header>
          <v-layout row>
            <!-- Card Principal -->
            <v-card flat class="pl-2" color="red"
              ><v-checkbox
                @click.native="check($event, item.requisicoes, i)"
                :ripple="false"
                :value="selectAll[i]"
                @change="checkboxUpdated(i)"
              ></v-checkbox>
            </v-card>
            <v-flex cols1></v-flex>
            <v-flex cols11 align-self-center="true" class="pr-2">
              <h3>{{ item.name }}</h3>
            </v-flex>
          </v-layout>
        </v-expansion-panel-header>
        <!-- Conteúdo -->
        <v-expansion-panel-content>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="item.body"
            :single-select="singleSelect"
            item-key="name"
            :show-select="showSelect"
            must-sort
            class="elevation-1"
            @toggle-select-all="allRowsChanged($event, i)"
            @input="enterSelect($event, item.requisicoes, i)"
          >
            <!--  -->
            <!-- <template
              v-slot:[`item.data-table-select`]="{ item, isSelected, select }"
            >
              <v-simple-checkbox
                :v-model="item.inPams ? item.inPams : isSelected"
                :value="item.inPams ? item.inPams : isSelected"
                @input="select($event)"
                :disabled="item.inPams"
              ></v-simple-checkbox>
            </template> -->
            <!--  -->
          </v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <hr />
    selectAll:
    {{ selectAll }}
    <hr />
    selected
    {{ selected }} -->
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
    };
  },
  methods: {
    /**
     * seleção de todas as linhas
     * @params
     */
    allRowsChanged(event, id) {
      this.selectAll[id] = event.value;
    },
    /**
     * check box externo
     * @params
     */
    // eslint-disable-next-line no-unused-vars
    check(event, data, id) {
      event.cancelBubble = true;
      console.log('checkbox checked');
      // this.selectAll[id] = !this.selectAll[id];

      // if (this.selectAll[id]) {
      //   for (let i in data) {
      //     this.selected.push(data[i]);
      //   }
      // } else {
      //   this.selected = [];
      // }
    },
    /**
     * verifica a cada inclusãos
     * @params
     */
    enterSelect(values, data, id) {
      if (values.length == this.itemsPerPage || values.length == data.length) {
        this.selectAll[id] = true;
      } else {
        this.selectAll[id] = false;
      }

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
    checkboxUpdated(newValue) {
      console.log(newValue);
    },
    incluirEmPams() {
      this.setRequisicoesPams(this.selected);
    },
  },
  watch: {
    dataTable(newValue) {
      this.selectAll = new Array(newValue.length).fill(false);
    },
  },
};
</script>
