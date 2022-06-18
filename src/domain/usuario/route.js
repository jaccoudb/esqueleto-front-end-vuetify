export default [
  {
    name: 'list-usuario',
    path: '/usuarios',
    component: () => import('./pages/ListUsuario'),
    exact: false,
    meta: {
      title: 'usuario.menu',
    },
  },
  {
    name: 'create-usuario',
    path: '/usuarios/form',
    component: () => import('./pages/PageFormUsuario'),
    exact: true,
    meta: {
      title: 'usuario.create',
    },
  },
  {
    name: 'show-usuario',
    path: '/usuarios/:id',
    component: () => import('./pages/PageShowUsuario'),
    exact: true,
    meta: {
      title: 'usuario.show',
    },
  },
];
