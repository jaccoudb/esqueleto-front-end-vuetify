<template>
  <fab-panel-toggle title="usuario.detail.detail3" :filterOpened="true">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="sticky-last-column"
    ></v-data-table>
    <v-form>
      <v-row dense> </v-row>
      <v-row class="d-flex justify-end" dense>
        <v-btn color="blue " dark class="my-2 mx-1 mb-1" @click="onSubmit" tile>
          {{ $t('continue') }}
        </v-btn>
      </v-row>
    </v-form>
  </fab-panel-toggle>
</template>

<script>
import FabPanelToggle from '@/components/fab/panel/FabPanelToggle.vue';
export default {
  components: { FabPanelToggle },
  methods: {
    onSubmit() {
      this.$emit('setStep', { step: 4, subPage: 'Detail4' });
    },
  },

  data() {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
          width: '2%',
        },
        { text: 'Calories', value: 'calories', width: '2%' },
        { text: 'Fat (g)', value: 'fat', width: '2%' },
        { text: 'Carbs (g)', value: 'carbs', width: '2%' },
        { text: 'Protein (g)', value: 'protein', width: '2%' },
        { text: 'Iron (%)', value: 'iron', width: '2%' },
        { text: 'Col1 Extra', value: 'extra', width: '2%' },
        { text: 'Col2 Extra', value: 'extra', width: '2%' },
        { text: 'Col3 Extra', value: 'extra', width: '2%' },
        { text: 'Col4 Extra', value: 'extra', width: '2%' },
        { text: 'Col5 Extra', value: 'extra', width: '2%' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          extra: '?',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          extra: '?',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          extra: '?',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
          extra: '?',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
          extra: '?',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          extra: '?',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
          extra: '?',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
          extra: '?',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
          extra: '?',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
          extra: '?',
        },
      ],
    };
  },
};
</script>

<style>
.sticky-last-column table > tbody > tr > td:nth-last-child(-n + 2),
.sticky-last-column table > thead > tr > th:nth-last-child(-n + 2) {
  position: sticky !important;
  right: 0;
}
.sticky-last-column table > thead > tr > th:nth-last-child(-n + 2) {
  background: rgb(231, 107, 107);
}

.sticky-last-column table > tbody > tr > td:nth-last-child(2),
.sticky-last-column table > thead > tr > th:nth-last-child(2) {
  right: 110px;
  background: rgb(172, 101, 19);
}

tr:nth-child(even) {
  background: lightgray;
}
</style>
