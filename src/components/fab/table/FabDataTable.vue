<template>
  <div>
    <fab-table-paginator
      v-if="options.page && serverItemsLength"
      :length="length"
      :page="options.page"
      :totalRows="serverItemsLength"
      :items-per-page.sync="options.itemsPerPage"
      total-visible="7"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"
      @setPage="handlePageChange"
      @setItemsPerPage="handleitemsPerPageChange"
    ></fab-table-paginator>

    <v-data-table
      v-if="options.page && serverItemsLength"
      :headers="headers"
      :items="items"
      :items-per-page="options.itemsPerPage"
      :options.sync="options"
      :server-items-length="serverItemsLength"
      :loading="loading"
      :show-select="showSelect"
      :single-select="singleSelect"
      :item-key="itemKey"
      :page.sync="options.page"
      @page-count="pageCount = $event"
      @update:sort-by="handleOptionsChanges"
      @update:sort-desc="handleOptionsChanges"
      hide-default-footer
      dense
      must-sort
      mobile-breakpoint="959"
      class="mb-2 mt-2 border-gray-light px-1 py-1"
      :class="stickyLastColumn && 'sticky-last-column'"
      @input="$emit('input', $event)"
      @click="$emit('click', $event)"
      @change="$emit('change', $event)"
    >
      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
      <template
        v-for="slot in Object.keys($scopedSlots)"
        :slot="slot"
        slot-scope="scope"
        ><slot :name="slot" v-bind="scope"
      /></template>
    </v-data-table>

    <fab-table-paginator
      v-if="options.page && serverItemsLength"
      :length="length"
      :page="options.page"
      :totalRows="serverItemsLength"
      :items-per-page.sync="options.itemsPerPage"
      total-visible="7"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"
      @setPage="handlePageChange"
      @setItemsPerPage="handleitemsPerPageChange"
    ></fab-table-paginator>
  </div>
</template>

<script>
import FabTablePaginator from '../pagination/FabTablePaginator.vue';

export default {
  components: { FabTablePaginator },
  data() {
    return {
      pageCount: 0,
      options: {},
    };
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
    },
    itemKey: {
      type: String,
    },
    optionsTable: {
      type: Object,
      default: Object,
    },
    serverItemsLength: {
      type: Number,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    length: {
      type: Number,
      required: true,
    },
    initialSort: {
      type: Array,
      default: () => [],
    },
    initialDesc: {
      type: Array,
      default: () => [],
    },
    page: {
      type: Number,
    },
    loadRowsAtStart: {
      type: Boolean,
      default: false,
    },
    showSelect: {
      type: Boolean,
      default: false,
    },
    singleSelect: {
      type: Boolean,
      default: false,
    },
    stickyLastColumn: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleOptionsChanges() {
      this.$emit('setOptionsChanges', this.options);
    },
    handlePageChange(value) {
      this.options.page = value;
      this.handleOptionsChanges();
    },
    handleitemsPerPageChange(size) {
      this.options.itemsPerPage = size;
      this.options.page = 1;
      this.handleOptionsChanges();
    },
  },
  watch: {
    optionsTable: {
      handler(value) {
        if (value.page != this.options.page) {
          this.options.page = 1;
        }
      },
      deep: true,
    },
    serverItemsLength: {
      handler() {
        this.options.page = 1;
      },
      deep: true,
    },
  },

  created() {
    this.options = this.optionsTable;
    this.options.page = this.page;
    this.options.itemsPerPage = this.itemsPerPage;
    this.options.sortBy = this.initialSort;
    this.options.sortDesc = this.initialDesc;
  },
  mounted() {
    this.loadRowsAtStart && this.handleOptionsChanges();
  },
};
</script>
