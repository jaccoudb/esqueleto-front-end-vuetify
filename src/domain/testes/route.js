export default [
  {
    name: 'create-test',
    path: '/testes/form',
    component: () => import('./pages/PageTest'),
    exact: false,
    meta: {
      title: 'test.create',
    },
  },
  {
    name: 'list-test',
    path: '/testes',
    component: () => import('./pages/ListTeste'),
    exact: false,
    meta: {
      title: 'test.menu',
    },
  },
  {
    name: 'manufactor-test',
    path: '/testes/manufactor',
    component: () => import('./pages/PageManufactor'),
    exact: false,
    meta: {
      title: 'test.manufactor',
    },
  },
  {
    name: 'chat-test',
    path: '/testes/chat/model/1',
    component: () => import('./pages/PageChat'),
    exact: false,
    meta: {
      title: 'test.chat',
    },
  },
  {
    name: 'chat-test-model-2',
    path: '/testes/chat/model/2',
    component: () => import('./pages/PageChatModel2'),
    exact: false,
    meta: {
      title: 'test.chat.model.2',
    },
  },
  {
    name: 'chat-test-complete',
    path: '/testes/chat/model/3',
    component: () => import('./pages/PageChatCompleto'),
    exact: false,
    meta: {
      title: 'test.chat.complete',
    },
  },
  {
    name: 'inbox-test',
    path: '/testes/inbox',
    component: () => import('./pages/PageInbox'),
    exact: false,
    meta: {
      title: 'test.inbox',
    },
  },
  {
    name: 'history-test',
    path: '/testes/history',
    component: () => import('./pages/PageHistory'),
    exact: false,
    meta: {
      title: 'test.history',
    },
  },
  {
    name: 'validate-test',
    path: '/testes/validate',
    component: () => import('./pages/PageFormVeeValidate'),
    exact: false,
    meta: {
      title: 'test.validate',
    },
  },
  {
    name: 'panel-test',
    path: '/testes/panel',
    component: () => import('./pages/PageExpansionPanel'),
    exact: false,
    meta: {
      title: 'test.panel',
    },
  },
  {
    name: 'treeview-test',
    path: '/testes/treeview',
    component: () => import('./pages/PageTreeview'),
    exact: false,
    meta: {
      title: 'test.treeview',
    },
  },
  {
    name: 'filter-table-test',
    path: '/testes/filter',
    component: () => import('./pages/PageDataTableFilter'),
    exact: false,
    meta: {
      title: 'test.filter',
    },
  },
];
