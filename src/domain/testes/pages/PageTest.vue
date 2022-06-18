<template>
  <fab-page :title="title" :breadcrumbs-menu="menu" :withCard="true">
    <ShowDados />
    <!--  -->
    <fab-confirm-dialog
      v-model="showConfirmDialog"
      title="warning"
      detail="confirm.delete"
      yeslabel="delete"
      yesColor="error"
      nolabel="cancel"
      icon="mdi-help"
      @confirm="confirm()"
    />
    <!--  -->
    <v-row>
      <v-btn color="primary" @click="accept()" tile class="mx-1 my-1">{{
        $t('accept')
      }}</v-btn>
      <v-btn color="primary" @click="refuse()" tile class="mx-1 my-1">{{
        $t('refuse')
      }}</v-btn>
    </v-row>
  </fab-page>
</template>

<script>
import { mapActions } from 'vuex';
import FabPage from '@/components/fab/page/FabPage.vue';
import FabConfirmDialog from '@/components/fab/dialog/FabConfirmDialog.vue';
import ShowDados from '../show/ShowDados.vue';

export default {
  components: {
    FabPage,
    ShowDados,
    FabConfirmDialog,
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
    };
  },
  methods: {
    ...mapActions('testes', ['validaEstado', 'estadoDiscrepancia']),
    accept() {
      // this.$router.push({ name: 'create-test' });
      this.validaEstado();
      this.detail = this.$t('sample.action1');
      this.showConfirmDialog = true;
    },
    refuse() {
      // this.$router.push({ name: 'create-test' });
      this.estadoDiscrepancia();
      this.detail = this.$t('sample.action1');
      this.showConfirmDialog = true;
    },
    confirm() {
      this.showConfirmDialog = false;
    },
  },
};
</script>
