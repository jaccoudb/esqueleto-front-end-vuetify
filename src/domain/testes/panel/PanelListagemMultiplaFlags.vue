<template>
  <v-form ref="panelRegistered">
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(item, index) in dataTable" :key="index">
        <v-expansion-panel-header>
          <v-row dense>
            <v-col
              cols="1"
              class="d-flex align-center justify-center"
              style="background-color: aqua"
            >
              <!-- -->
              <v-btn text color="white">
                <v-icon color="black" dense> mdi-cart-remove </v-icon>
              </v-btn>
              <!-- -->
            </v-col>
            <!-- Exibição do Número da Requisição e balão de Informação Técnica -->
            <v-col
              cols="11"
              class="d-flex justify-center align-center"
              style="background-color: blueviolet"
            >
              <h3>{{ item.name }}</h3>
              <v-icon class="ml-2" color="white">mdi-flag</v-icon>
              <v-icon color="white">mdi-flag-variant</v-icon>
              <v-icon color="white">mdi-flag-triangle</v-icon>
            </v-col>
          </v-row>

          <template v-slot:actions>
            <v-icon color="teal" style="background-color: rgb(226, 43, 119)">
              mdi-check
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <!-- Conteúdo -->
        <v-expansion-panel-content>
          <h1>Algum Dado</h1>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
    console.log(this.body);
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
      body: [
        {
          name: 'Frozen Yogurt',
          calories: '159',
          fat: '6.0',
          carbs: '24',
          protein: '4.0',
          iron: '1%',
          disabled: false,
          id: 1,
        },
        {
          name: 'Ice cream sandwich',
          calories: '237',
          fat: '9.0',
          carbs: '37',
          protein: '4.3',
          iron: '1%',
          disabled: false,
          id: 2,
        },
        {
          name: 'Eclair',
          calories: '262',
          fat: '16.0',
          carbs: '23',
          protein: '6.0',
          iron: '7%',
          disabled: false,
          id: 3,
        },
        {
          name: 'Cupcake',
          calories: '305',
          fat: '3.7',
          carbs: '67',
          protein: '4.3',
          iron: '8%',
          disabled: false,
          id: 4,
        },
        {
          name: 'Gingerbread',
          calories: '356',
          fat: '16.0',
          carbs: '49',
          protein: '3.9',
          iron: '16%',
          disabled: false,
          id: 5,
        },
      ],
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
      // console.log('-------------------------');
      console.log('enterSelect: ', index);
      console.log(data.length);
      console.log(items.length);
      // if (items.length == this.itemsPerPage || items.length == data.length) {
      //   this.selectAll[index] = true;
      //   this.checkbox[index] = true;
      // } else {
      //   this.selectAll[index] = false;
      //   this.checkbox[index] = false;
      // }

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
    // eslint-disable-next-line no-unused-vars
    itensSelect(event) {
      console.log(event);
    },
    teste(e) {
      console.log('teste');
      console.log(e);
    },
  },
  watch: {
    dataTable(newValue) {
      this.selectAll = new Array(newValue.length).fill(false);
    },
  },
};
</script>
