<template>
  <v-container class="mx-auto" style="background-color: white">
    <!-- <v-skeleton-loader
      class="pa-2 usage"
      type="table-thead, table-tbody, actions"
    ></v-skeleton-loader> -->
    <v-skeleton-loader
      v-bind="attrs"
      type="tableThead, tableTbody, actions"
      :types="tipo"
      id="button"
    ></v-skeleton-loader>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    attrs: {
      class: 'pa-3',
      boilerplate: true,
      elevation: 2,
    },
    tipo: {
      actions: 'button@3',
      tableTbody: 'table-row-divider@5',
    },
  }),
};
</script>

<style>
.usage {
  border: 1px dashed rgba(0, 0, 0, 0.4);
}
.v-skeleton-loader__actions .v-skeleton-loader__button:nth-child(2) {
  margin-right: 12px;
}
</style>
