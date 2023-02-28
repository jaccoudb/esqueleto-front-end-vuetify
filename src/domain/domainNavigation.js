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
      icon: 'mdi-forum ',
      key: 'chat.menu',
      regex: /^\/chat/,
      items: [
        {
          icon: 'mdi-message-cog',
          key: 'chat.modelos.model1',
          to: { name: 'chat-test-model-1' },
          exact: true,
          disabled: false,
        },
        {
          icon: 'mdi-forum-outline',
          key: 'chat.modelos.model2',
          to: { name: 'chat-test-model-2' },
          exact: true,
          disabled: false,
        },
        {
          icon: 'mdi-message-reply',
          key: 'chat.modelos.model3',
          to: { name: 'chat-test-model-3' },
          exact: true,
          disabled: false,
        },
        {
          icon: 'mdi-message-settings-outline',
          key: 'chat.modelos.model4',
          to: { name: 'chat-test-model-4' },
          exact: true,
          disabled: false,
        },
      ],
    },
    {
      icon: 'mdi-cloud-upload-outline',
      key: 'upload.input',
      to: { name: 'upload-input' },
      exact: true,
      disabled: false,
    },
    {
      icon: 'mdi-cloud-upload-outline',
      key: 'upload.excel',
      to: { name: 'upload-excel' },
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
    {
      icon: 'mdi-format-page-break',
      key: 'test.validate',
      to: { name: 'validate-test' },
      exact: true,
      disabled: false,
    },
    {
      icon: 'mdi-arrow-expand',
      key: 'test.panel',
      to: { name: 'panel-test' },
      exact: true,
      disabled: false,
    },
    {
      icon: 'mdi-file-tree-outline',
      key: 'test.treeview',
      to: { name: 'treeview-test' },
      exact: true,
      disabled: false,
    },
    {
      icon: 'mdi-table-large',
      key: 'test.filter',
      to: { name: 'filter-table-test' },
      exact: true,
      disabled: false,
    },
    {
      icon: 'mdi-account',
      key: 'test.login',
      to: { name: 'login-test' },
      exact: true,
      disabled: false,
    },
    {
      icon: 'mdi-skull-scan-outline',
      key: 'test.skeleton',
      to: { name: 'skeleton-test' },
      exact: true,
      disabled: false,
    },
  ],
};
