<template>
  <fab-page :title="title" :title-parans="titleParans" :breadcrumbs-menu="menu">
    <show-usuario />
  </fab-page>
</template>

<script>
import FabPage from '@/components/fab/page/FabPage.vue';
import ShowUsuario from '../show/ShowUsuario.vue';

export default {
  components: {
    ShowUsuario,
    FabPage,
  },
  data() {
    return {
      title: 'usuario.show',
      titleParans: this.$route.params.id ? { msg: this.$route.params.id } : {},
      menu: [
        { text: 'home', to: '/', disabled: false },
        {
          text: 'usuario.list',
          to: '/usuarios',
        },
        {
          text: 'show',
        },
      ],
    };
  },
  created() {},
};
</script>
