<template>
  <fab-page :title="title" :breadcrumbs-menu="menu" :withCard="true">
    <h1>Testando Passagem</h1>
    <hr />
    {{ $route.params }};
  </fab-page>
</template>

<script>
import { mapActions } from 'vuex';
import FabPage from '@/components/fab/page/FabPage.vue';

export default {
  components: {
    FabPage,
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
