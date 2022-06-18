import Vue from 'vue';
import moment from 'moment';
import store from '../store';
import 'moment/locale/pt';

const { lang } = store.state.configs;

/**
 * Date library momentjs
 * https://momentjs.com/
 */
Vue.prototype.$moment = moment;

moment.locale(lang);
