<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:[`body.append`]="{}">
        <div>
          {{
          <v-text-field
            v-model="calories"
            type="number"
            label="Less than"
          ></v-text-field>
          }}
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import sobremesaI from 'sobremesaI.json';
import sobremesaII from 'sobremesaII.json';
import columns from './columnsSobremesa';

export default {
  data() {
    return {
      headers: columns,
      search: '',
      calories: '',
      sobremesaI: sobremesaI,
      sobremesaII: sobremesaII,
    };
  },
};
</script>
