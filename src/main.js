import Vue from 'vue';
import { ValidationProvider, extend, configure } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

import App from './App.vue';

// VUEX - https://vuex.vuejs.org/
import store from './store';

// VUE-ROUTER - https://router.vuejs.org/
import router from './router';

// Axios
import axios from './axios';

// PLUGINS
import vuetify from './plugins/vuetify';
import i18n from './plugins/vue-i18n';
import authentication from './plugins/keycloack';
import './plugins/vue-google-maps';
import './plugins/vue-shortkey';
import './plugins/vue-head';
import './plugins/vue-gtag';
import './plugins/apexcharts';
import './plugins/echarts';
import './plugins/animate';
import './plugins/clipboard';
import './plugins/moment';

// FILTERS
import './filters/capitalize';
import './filters/lowercase';
import './filters/uppercase';
import './filters/formatCurrency';
import './filters/formatDate';
import './filters/humanTImeFromNow';

import './directives/formatWithTwoDecimal';

// STYLES
// Main Theme SCSS
import './assets/scss/theme.scss';

// Animation library - https://animate.style/
import 'animate.css/animate.min.css';

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false;

configure({
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`${field}`);
    return i18n.t(`validations.messages.${values._rule_}`, values);
  },
});

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component('ValidationProvider', ValidationProvider);

i18n.locale = store.state.configs.lang;
Vue.prototype.$http = axios;
Vue.use(authentication);

let disableKeycloak = process.env.VUE_APP_DISABLE_KEYCLOAK;
if (
  disableKeycloak !== undefined &&
  disableKeycloak.trim().toUpperCase() === 'TRUE'
) {
  localStorage.setItem('user-name', process.env.VUE_APP_USER);
  localStorage.setItem('sgorg-name', process.env.VUE_APP_UNIDADE);
  localStorage.setItem('token', process.env.VUE_APP_TOKEN);
  store.dispatch('login/login', {
    usuarioLogado: process.env.VUE_APP_USER,
    unidadeLogada: process.env.VUE_APP_UNIDADE,
    tokenUsuarioKeycloak: process.env.VUE_APP_TOKEN,
  });

  new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: (h) => h(App),
  }).$mount('#app');
} else {
  Vue.$keycloak
    .init({ onLoad: 'login-required', checkLoginIframe: false })
    .then(() => {
      new Vue({
        router,
        store,
        vuetify,
        i18n,
        render: (h) => h(App),
      }).$mount('#app');

      localStorage.setItem('token', Vue.$keycloak.token);
      localStorage.setItem('refresh-token', Vue.$keycloak.refreshToken);
      localStorage.setItem('user-name', Vue.$keycloak.tokenParsed.given_name);
      localStorage.setItem('sgorg-name', Vue.$keycloak.tokenParsed.family_name);
      store.dispatch('login/login', {
        usuarioLogado: Vue.$keycloak.tokenParsed.given_name,
        tokenUsuarioKeycloak: Vue.$keycloak.token,
        unidadeLogada: Vue.$keycloak.tokenParsed.family_name,
      });
    });
}
