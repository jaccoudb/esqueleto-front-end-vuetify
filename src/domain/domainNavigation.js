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
        // {
        //   icon: 'mdi-plus',
        //   key: 'usuario.show',
        //   to: { name: 'show-usuario' },
        //   exact: true,
        //   disabled: true,
        // },
      ],
    },
    {
      icon: 'mdi-alert-circle ',
      key: 'test.menu',
      regex: /^\/usuarios/,
      items: [
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
        {
          icon: 'mdi-script',
          key: 'test.manufactor',
          to: { name: 'manufactor-test', params: { userId: '123' } },
          exact: true,
          disabled: false,
        },
      ],
    },
    {
      icon: 'mdi-message-reply',
      key: 'test.chat',
      to: { name: 'chat-test' },
      exact: true,
      disabled: false,
    },
    {
      icon: 'mdi-inbox',
      key: 'test.inbox',
      to: { name: 'inbox-test' },
      exact: true,
      disabled: false,
    },
    {
      icon: 'mdi-history',
      key: 'test.history',
      to: { name: 'history-test' },
      exact: true,
      disabled: false,
    },
  ],
};
