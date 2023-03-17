<template>
  <div class="d-flex flex-column flex-grow-1">
    <v-card
      class="d-flex flex-column flex-grow-1 mb-1 color: light-blue lighten-4"
    >
      <v-card-title>Painel com coluna seleção </v-card-title>

      <v-card-text class="pt-0">
        <!-- <div> -->
        <!-- <h1>Painel Listagem Simples</h1> -->
        <!-- <PanelCheckBox /> -->
        <!-- <PanelListagemSimples /> -->
        <!-- <PanelListagemMultipla /> -->
        <!-- </div> -->
        <!-- <div> -->
        <!-- <h1>Painel Listagem Múltipla</h1> -->
        <PanelListagemMultiplaCheckBox />
        <!-- </div> -->
        <v-divider class="my-2"></v-divider>
        <v-icon class="mr-2" small> mdi-clock </v-icon>
        <span class="text-caption grey--text font-weight-light"
          >last registration: {{ new Date() }}</span
        >
      </v-card-text>
    </v-card>
    <v-spacer />
    <v-card
      class="d-flex flex-column flex-grow-1 mt-1 color: light-green lighten-4"
    >
      <v-card-title>Painel com coluna checkbox </v-card-title>
      <v-card-text>
        <PanelListagemMultiplaColunaCheckBox />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import PanelCheckBox from '../panel/PanelCheckBox.vue';
import PanelListagemSimples from '../panel/PanelListagemSimples.vue';
import PanelListagemMultipla from '../panel/PanelListagemMultipla.vue';
import PanelListagemMultiplaCheckBox from '../panel/PanelListagemMultiplaCheckBox.vue';
import PanelListagemMultiplaColunaCheckBox from '../panel/PanelListagemMultiplaColunaCheckBox.vue';
import TableUsuario from '../tables/TableUsuario.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PanelCheckBox,
    // eslint-disable-next-line vue/no-unused-components
    PanelListagemSimples,
    // eslint-disable-next-line vue/no-unused-components
    PanelListagemMultipla,
    // eslint-disable-next-line vue/no-unused-components
    PanelListagemMultiplaCheckBox,
    // eslint-disable-next-line vue/no-unused-components
    TableUsuario,
    // eslint-disable-next-line vue/no-unused-components
    PanelListagemMultiplaColunaCheckBox,
  },
  data() {
    return {
      title: 'test.list',
      menu: [
        { to: '/', text: 'home', disabled: false },
        { to: '/test', text: 'test.list', disabled: true },
      ],
      showConfirmDialog: false,
      detail: '',
      checkbox: true,
      radioGroup: 1,
      switch1: true,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Calories',
          align: 'start',
          sortable: false,
          value: 'calories',
        },
        {
          text: 'Fat (g)',
          align: 'start',
          sortable: false,
          value: 'fat',
        },
        {
          text: 'Carbs (g)',
          align: 'start',
          sortable: false,
          value: 'carbs',
        },
        {
          text: 'Protein (g)',
          align: 'start',
          sortable: false,
          value: 'protein',
        },
        {
          text: 'Iron (%)',
          align: 'start',
          sortable: false,
          value: 'iron',
        },
        {
          text: 'Observação',
          align: 'center',
          sortable: false,
          value: 'observacao',
        },
        {
          text: 'Diligência',
          align: 'center',
          sortable: false,
          value: 'diligencia',
        },
        {
          text: 'Ganhador',
          align: 'center',
          sortable: false,
          value: 'ganhador',
        },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          bool: true,
          observacao: true,
          diligencia: false,
          ganhador: false,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          bool: false,
          observacao: false,
          diligencia: false,
          ganhador: true,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          bool: false,
          observacao: false,
          diligencia: false,
          ganhador: false,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
          bool: false,
          observacao: true,
          diligencia: false,
          ganhador: false,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
          bool: false,
          observacao: false,
          diligencia: false,
          ganhador: false,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          bool: false,
          observacao: false,
          diligencia: false,
          ganhador: false,
        },
      ],
    };
  },
  methods: {
    check: function (e) {
      e.cancelBubble = true;
      console.log('checkbox checked');
    },
    expansionPanel: function () {
      console.log('expansion panel');
    },
    selectAll(event) {
      if (event.status) {
        alert('selected all');
      } else {
        alert('deselected all');
      }
    },

    getIcon(icon) {
      if (icon == 0 || icon == false) return 'mdi-message';
      else return 'mdi-chat-processing';
    },
  },
};
</script>
