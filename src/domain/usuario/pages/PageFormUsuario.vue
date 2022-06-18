<template>
  <fab-page
    :title="title"
    :title-parans="titleParans"
    :breadcrumbs-menu="menu"
    :withCard="true"
  >
    <form-usuario />
  </fab-page>
</template>

<script>
import FabPage from '@/components/fab/page/FabPage.vue';
import FormUsuario from '../form/FormUsuario.vue';

export default {
  components: {
    FormUsuario,
    FabPage,
  },
  data() {
    return {
      title: this.$route.params.id ? 'usuario.edit' : 'usuario.create',
      titleParans: this.$route.params.id ? { msg: this.$route.params.id } : {},
      menu: [],
    };
  },
  created() {
    this.menu = [
      { text: 'home', to: '/', disabled: false },
      {
        text: 'usuario.list',
        to: '/usuarios',
      },
      {
        text: this.title,
        textParans: { msg: this.$route.params.id },
      },
    ];
  },
};
</script>
