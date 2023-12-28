<template>
  <v-form ref="panelRegistered">
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(linha, indice) in dataTable" :key="indice">
        <v-expansion-panel-header>
          <v-layout row>
            <!-- Card Principal -->
            <v-card flat class="pl-2">
              <v-checkbox
                v-model="checkBoxTitle[indice]"
                hide-details
                class="shrink mt-0"
                :ripple="false"
                color="red"
                @click.native="checkBoxChange($event, linha.body, indice)"
              >
              </v-checkbox>
            </v-card>
            <v-flex cols1></v-flex>
            <v-flex cols11 align-self-center="true" class="pr-2">
              <!-- <v-badge avatar icon="mdi-lock">
                <strong v-html="linha.name"></strong>
              </v-badge> -->
              <strong v-html="linha.name"></strong>
              <!-- <sup>
                <v-icon x-small v-if="linha.alert">mdi-tooltip-edit</v-icon>
                <v-icon x-small v-else color="white">mdi-circle</v-icon>
              </sup> -->
              <!-- <sup> <v-icon x-small>mdi-chat-processing</v-icon></sup> -->
              <!-- <v-badge dark overlap content="new" color="blue"> -->
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" v-if="linha.alert" class="ml-2"
                    >mdi-tooltip-edit</v-icon
                  >
                  <v-icon v-else class="ml-2" color="white">mdi-circle</v-icon>
                </template>
                <span>{{ 'Interação Técnica' }}</span>
              </v-tooltip>
              <!-- </v-badge> -->
            </v-flex>
          </v-layout>
        </v-expansion-panel-header>
        <!-- Conteúdo -->
        <v-expansion-panel-content>
          <v-data-table
            v-model="selected"
            must-sort
            :headers="headers"
            :items="linha.body"
            item-key="name"
            :single-select="singleSelect"
            :show-select="showSelect"
            class="elevation-1"
            @toggle-select-all="allRowsChanged($event, indice)"
            @input="enterSelect($event, linha.body, indice)"
          >
            <!-- CheckBox Cabeçalho -->
            <template v-slot:[`header.data-table-select`]="{ on, props }">
              <v-checkbox
                :input-value="props.value"
                :indeterminate="props.indeterminate"
                @change="on.input"
                @update:indeterminate="
                  updateCheckBox($event, indice, linha.body, selected)
                "
                v-model="checkBoxHeader[indice]"
                color="green"
              >
              </v-checkbox>
            </template>
            <!-- CheckBox Linha Individual -->
            <template
              v-slot:[`item.data-table-select`]="{ item, isSelected, select }"
            >
              <v-simple-checkbox
                :disabled="item.disabled"
                :v-model="item.disabled ? item.disabled : isSelected"
                :value="item.disabled ? item.disabled : isSelected"
                @input="select($event)"
              ></v-simple-checkbox>
            </template>
            <!--  -->
            <template v-slot:[`item.box`]="{ item }">
              <v-checkbox
                v-model="item.box"
                color="grey darken-2"
                @change="selectDialog(item.box, item, indice)"
              />
            </template>
            <!--  -->
          </v-data-table>
          <!--  -->
          <v-row dense class="ma-2">
            <v-card
              class="overflow-y-auto"
              max-height="400"
              v-if="checkBoxInteracoes[indice]"
            >
              <v-banner
                class="justify-center text-h5 font-weight-light color: light-green darken-1"
                sticky
              >
                Scroll Me - Painel de Índice
              </v-banner>

              <v-card-text>
                Os Elementos são:

                <br />
                <div>{{ selectArray[indice] }}</div>
                <br />

                <div v-for="n in 12" :key="n" class="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  commodi earum tenetur. Asperiores dolorem placeat ab nobis
                  iusto culpa, autem molestias molestiae quidem pariatur.
                  Debitis beatae expedita nam facere perspiciatis. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Repellendus
                  ducimus cupiditate rerum officiis consequuntur laborum
                  doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam
                  at corporis, similique ratione quasi illo!
                </div>
              </v-card-text>
            </v-card>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <hr />
    checkBox:
    {{ checkBoxTitle }}
    <hr />
    selectAll:
    {{ selectAll }}
    <hr />
    selected:
    {{ selected }}
    <hr />
    interaction:
    {{ checkBoxInteracoes }}
    <hr />
    selectArray:
    {{ selectArray }}
    <hr />
  </v-form>
</template>

<script>
import sobremesaI from '../tables/sobremesaI.json';
import columns from '../tables/columnsSobremesa';

export default {
  created() {
    this.headers = columns;
    this.dataTable = this.sobremesaI.dataTable;
    this.checkBoxTitle = Array(this.dataTable.length).fill(false);
    this.checkBoxHeader = Array(this.dataTable.length).fill(false);
    this.checkBoxInteracoes = Array(this.dataTable.length).fill(false);
    this.selectArray = Array(this.dataTable.length).fill(null);
    this.dataTable.forEach((el1, i) => {
      const ocorrencia = el1.body.reduce((j, el2) => {
        if (el2.disabled) {
          return j + 1;
        } else {
          return j;
        }
      }, 0);
      if (ocorrencia < el1.body.length) {
        this.checkBoxHeader[i] = false;
        this.checkBoxTitle[i] = false;
      } else {
        this.checkBoxHeader[i] = true;
        this.checkBoxTitle[i] = true;
      }
      console.log(i + ' ' + ocorrencia);
    }, 0);
  },
  data() {
    return {
      checkBoxTitle: [],
      checkBoxHeader: [],
      checkBoxInteracoes: [],
      headers: columns,
      itemsPerPage: 10,
      indiceInteracao: null,
      panel: [],
      dataTable: [],
      selectAll: [],
      selected: [],
      showSelect: true,
      singleSelect: false,
      sobremesaI,
      selectArray: [],
    };
  },
  methods: {
    /**
     * seleção de todas as linhas da tabela
     * @params event
     * @params index da tabela
     */
    // eslint-disable-next-line no-unused-vars
    allRowsChanged(event, index) {
      console.log('allRowsChanged: ', index);
      this.checkBoxTitle[index] = event.value;
      this.selectAll[index] = event.value;
    },
    /**
     * check box externo
     * @params data. Conteúdo da tabela
     * @params index. Indice do panel.
     */
    // eslint-disable-next-line no-unused-vars
    checkBoxChange(event, data, index) {
      // console.log('checkBoxChange');
      event.cancelBubble = true;

      // Parâmetro de checkAll na tabela recebe o mesmo que do checkBox externo.
      this.selectAll[index] = this.checkBoxTitle[index];

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
      if (this.selected.length > 0) {
        this.$emit('habilaInsercao', true);
      } else {
        this.$emit('habilaInsercao', false);
      }
    },
    /**
     * Verifica se o evento do checkbox interno é indeterminado e, caso negativo/positivo,
     * efetua mudança no checkbox mais externo.
     * @param {Boolean} event
     * @param {Number} index
     * @param {Array} dataFields
     * @param {Array} dataSelected
     */
    // eslint-disable-next-line no-unused-vars
    updateCheckBox(event, index, dataFields, dataSelected) {
      console.log('updateCheckBox');
      console.log(event);

      let difference = dataFields.filter((x) => !dataSelected.includes(x));
      // console.log(difference);
      if (difference.length === 0) {
        this.checkBoxTitle.splice(index, 1, true);
      }
      if (event === true && this.checkBoxTitle[index] === true) {
        // console.log('object é true');
        this.checkBoxTitle.splice(index, 1, false);
      }

      return event;
    },
    selectDialog(event, item, index) {
      console.log('Panel Index: ' + index);
      // console.log('event: ' + event);

      // Mostrar Painel escondido de acordo com índice.
      this.checkBoxInteracoes.splice(index, 1, event);
      console.log('checkBoxInteracoes: ' + this.checkBoxInteracoes[index]);

      // Cria objeto com os dados atuais
      let array = [];
      let object = { name: item.name, id: item.id };
      console.log(object);

      // Verificar se é inclusão/remoção
      if (!event && this.selectArray[index]) {
        let teste = this.selectArray[index].includes(object);
        console.log('Contem: ' + teste);
        array.push(object);

        // Remoção elemento do array
        const arrayWithoutD = this.selectArray[index].filter(function (letter) {
          return letter.id !== object.id;
        });
        this.selectArray.splice(index, 1, arrayWithoutD);
      } else {
        // Verifica se o painel está aberto em mais de uma ocorrência
        if (this.indiceInteracao !== index) {
          this.indiceInteracao = index;
          array.push(object);
          this.selectArray.splice(index, 1, array);
        } else {
          this.selectArray[index].push(object);
        }
      }
      console.log(JSON.parse(JSON.stringify(this.selectArray)));
    },
  },
  watch: {
    dataTable(newValue) {
      this.selectAll = new Array(newValue.length).fill(false);
    },
  },
};
</script>
