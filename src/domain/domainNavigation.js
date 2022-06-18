export default {
  text: '',
  key: '',
  items: [
    {
      icon: 'mdi-account ',
      key: 'usuario.menu',
      regex: /^\/usuarios/,
      items: [
        {
          icon: 'mdi-magnify',
          key: 'usuario.list',
          link: '/usuarios',
          exact: true,
        },
        {
          icon: 'mdi-plus',
          key: 'usuario.create',
          link: '/usuarios/form',
          exact: true,
        },
        {
          icon: 'mdi-plus',
          key: 'usuario.show',
          to: { name: 'show-usuario' },
          exact: true,
          disabled: true,
        },
      ],
    },
    {
      icon: 'mdi-script',
      key: 'test.create',
      to: { name: 'create-test' },
      exact: true,
      disabled: false,
    },
    {
      icon: 'mdi-script',
      key: 'test.list',
      to: { name: 'list-test' },
      exact: true,
      disabled: false,
    },
  ],
};
