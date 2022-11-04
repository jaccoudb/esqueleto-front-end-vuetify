<template>
  <fab-page :title="title" :breadcrumbs-menu="menu" :withCard="true">
    <!-- <PanelCheckBox /> -->
    <!-- <PanelListagemSimples /> -->
    <hr />
    <PanelListagemMultipla />
  </fab-page>
</template>

<script>
import FabPage from '@/components/fab/page/FabPage.vue';
import PanelCheckBox from '../panel/PanelCheckBox.vue';
import PanelListagemSimples from '../panel/PanelListagemSimples.vue';
import PanelListagemMultipla from '../panel/PanelListagemMultipla.vue';

export default {
  components: {
    FabPage,
    // eslint-disable-next-line vue/no-unused-components
    PanelCheckBox,
    // eslint-disable-next-line vue/no-unused-components
    PanelListagemSimples,
    PanelListagemMultipla,
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
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
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
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          bool: false,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          bool: false,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
          bool: false,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
          bool: false,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          bool: false,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
          bool: false,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
          bool: false,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
          bool: false,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
          bool: false,
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
  },
};
</script>
