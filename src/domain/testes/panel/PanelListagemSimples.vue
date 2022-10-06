<template>
  <v-form>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header> Listagem Simples </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :single-select="singleSelect"
            item-key="name"
            show-select
            class="elevation-1"
            @toggle-select-all="selectAll"
          >
            <!--  -->
            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>
            <!--  -->
            <template
              v-slot:[`item.data-table-select`]="{ item, isSelected, select }"
            >
              <v-simple-checkbox
                color="green"
                :v-model="isSelected"
                :value="item.bool ? item.bool : isSelected"
                @input="select($event)"
                :disabled="item.bool"
              ></v-simple-checkbox>
            </template>

            <!--  -->
          </v-data-table>
          <hr />
          Selecionados:
          {{ selected }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
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
          bool: true,
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
      ],
    };
  },
  methods: {
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
