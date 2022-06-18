import Vue from 'vue';
import Router from 'vue-router';
import domainRoutes from '../domain/domainRoutes';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "blank" */ '@/views/Home.vue'),
    meta: {
      title: 'home',
    },
  },
  ...domainRoutes,
  {
    path: '*',
    name: 'error',
    component: () =>
      import(/* webpackChunkName: "error" */ '@/views/NotFound.vue'),
    meta: {
      layout: 'error',
    },
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes,
});

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  return next();
});

/**
 * After each route update
 */
router.afterEach(() => {});

export default router;
