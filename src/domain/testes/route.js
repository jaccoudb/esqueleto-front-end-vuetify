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
];
