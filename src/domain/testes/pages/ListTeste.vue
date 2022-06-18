<template>
  <fab-table-page :title="title" :breadcrumbs-menu="menu">
    <template slot="filter">
      <FilterTeste />
    </template>
    <fab-message-dialog
      v-model="showDialogMessage"
      :title="title"
      :detail="detail"
    />
    <fab-confirm-dialog
      v-model="showConfirmDialog"
      title="warning"
      detail="confirm.delete"
      yeslabel="delete"
      yesColor="error"
      nolabel="cancel"
      icon="mdi-help"
      @confirm="confirmAction()"
    />

    <template slot="actionsButtons">
      <v-btn color="primary" @click="action1()" tile class="mx-1 my-1">{{
        $t('sample.action1')
      }}</v-btn>
    </template>

    <TableUsuario />
  </fab-table-page>
</template>

<script>
import FilterTeste from '../filter/FilterTeste.vue';
import TableUsuario from '../tables/TableUsuario.vue';
import FabTablePage from '@/components/fab/page/FabTablePage.vue';
import { mapState } from 'vuex';
import FabMessageDialog from '@/components/fab/dialog/FabMessageDialog.vue';
import FabConfirmDialog from '@/components/fab/dialog/FabConfirmDialog.vue';

export default {
  components: {
    FabTablePage,
    FilterTeste,
    TableUsuario,
    FabMessageDialog,
    FabConfirmDialog,
  },
  computed: {
    ...mapState('testes', ['selectData']),
  },
  data() {
    return {
      open: true,
      title: 'test.list',
      menu: [
        { to: '/', text: 'home', disabled: false },
        { to: '/test', text: 'test.list', disabled: true },
      ],
      showDialogMessage: false,
      showConfirmDialog: false,
      detail: '',
      message: '',
    };
  },
  methods: {
    action1() {
      this.$router.push({ name: 'create-test' });
    },
  },
};
</script>
