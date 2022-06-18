<template>
  <v-card class="" tile>
    <v-row dense align="center" justify="center" class="pa-1">
      <v-col cols="12" sm="12" md="2">
        <span class="text-subtitle-1 text-no-wrap">
          {{ $t('$vuetify.dataTable.totalItemsText', { total: totalRows }) }}
        </span>
      </v-col>

      <v-col cols="12" sm="12" md="8">
        <v-pagination v-model="selectPage" :length="length" total-visible="5" />
      </v-col>

      <v-col cols="12" sm="12" md="2">
        <v-select
          v-model="selectItems"
          :items="items"
          class="md-mx-3"
          flat
          dense
          auto-select-first
          hide-details
          outlined
        ></v-select>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import approximate from '@/util/approximate';

export default {
  data() {
    return {
      items: [2, 10, 20, 50, 100],
    };
  },
  props: {
    length: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      default: 1,
    },
    totalRows: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
    },
  },
  computed: {
    selectItems: {
      get() {
        let value = this.itemsPerPage;
        if (value === undefined && this.totalRows && this.length) {
          value = Math.ceil(this.totalRows / this.length);
          value = approximate(this.items, value);
        }
        return value;
      },
      set(value) {
        this.$emit('setItemsPerPage', value);
      },
    },
    selectPage: {
      get() {
        return this.page;
      },
      set(value) {
        this.$emit('setPage', value);
      },
    },
  },
};
</script>
