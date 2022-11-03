<template>
  <fab-table-page title="usuario.list" :breadcrumbs-menu="menu">
    <template slot="filter">
      <filter-usuario />
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
      <v-btn color="primary" @click="action2()" tile class="mx-1 my-1">{{
        $t('sample.action2')
      }}</v-btn>
      <v-btn color="primary" @click="action3()" tile class="mx-1 my-1">{{
        $t('sample.action3')
      }}</v-btn>
      <v-btn color="primary" @click="action4()" tile class="mx-1 my-1">{{
        $t('sample.action4')
      }}</v-btn>
      <v-btn color="primary" @click="action5()" tile class="mx-1 my-1">{{
        $t('sample.action5')
      }}</v-btn>
      <v-btn color="primary" @click="action6()" tile class="mx-1 my-1">{{
        $t('sample.action6')
      }}</v-btn>
    </template>
    <!--  -->
    <TableUsuario />
  </fab-table-page>
</template>

<script>
import FilterUsuario from '../filter/FilterUsuario.vue';
import TableUsuario from '../tables/TableUsuario.vue';
import FabTablePage from '@/components/fab/page/FabTablePage.vue';
import { mapActions, mapMutations } from 'vuex';
import FabMessageDialog from '@/components/fab/dialog/FabMessageDialog.vue';
import FabConfirmDialog from '@/components/fab/dialog/FabConfirmDialog.vue';
import Notification from '@/type/notification';
import Alert from '@/type/alert';

export default {
  components: {
    FabTablePage,
    FilterUsuario,
    TableUsuario,
    FabMessageDialog,
    FabConfirmDialog,
  },
  data() {
    return {
      open: true,
      menu: [
        { to: '/', text: 'home', disabled: false },
        { to: '/usuarios', text: 'usuario.list', disabled: true },
      ],
      showDialogMessage: false,
      showConfirmDialog: false,
      detail: '',
      title: null,
      message: '',
    };
  },
  methods: {
    create() {
      this.$router.push({ name: 'create-usuario' });
    },
    action1() {
      this.detail = this.$t('sample.action1');
      this.showDialogMessage = true;
    },
    action2() {
      this.showSuccess(this.$t('sample.action2'));
      const alert = new Alert('sample.action2', 'success', true);
      this.SET_ALERT(alert);
    },
    action3() {
      this.showError(this.$t('sample.action3'));
    },
    action4() {
      this.showToast(this.$t('sample.action4'));
    },
    action5() {
      this.PUSH_NOTIFICATION(new Notification('info', 'sample.action5'));
    },
    action6() {
      const alert = new Alert('sample.action6', 'error', true);
      this.SET_ALERT(alert);
    },
    ...mapActions('configs', ['showToast', 'showSuccess', 'showError']),
    ...mapMutations('configs', ['PUSH_NOTIFICATION', 'SET_ALERT']),
  },
};
</script>
