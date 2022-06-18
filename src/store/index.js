import Vue from 'vue';
import Vuex from 'vuex';

// Global vuex
import configs from '../configs/store';

// Login
import Login from './login/index.js';

import organizacaoMilitar from '../domain/organizacaoMilitar/store';
import testes from '../domain/testes/store';

Vue.use(Vuex);

/**
 * Main Vuex Store
 */
const store = new Vuex.Store({
  modules: {
    configs,
    login: Login,
    organizacaoMilitar,
    testes,
  },
});

export default store;
