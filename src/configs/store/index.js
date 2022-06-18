import configs from '../../configs';
import actions from './actions';
import mutations from './mutations';
import Alert from '../../type/alert';

const { module, time, theme, currencies, language } = configs;

const {
  globalTheme,
  menuTheme,
  toolbarTheme,
  isToolbarDetached,
  isContentBoxed,
  isRTL,
} = theme;
const { currency, availableCurrencies } = currencies;
const { lang, availableLocales } = language;

// state initial values
const state = {
  module,

  time,

  // currency
  currency,
  availableCurrencies,

  // language
  lang,
  availableLocales,

  // themes and layout configurations
  globalTheme,
  menuTheme,
  toolbarTheme,
  isToolbarDetached,
  isContentBoxed,
  isRTL,

  // App.vue main toast
  toast: {
    show: false,
    color: 'black',
    message: '',
    timeout: 3000,
  },

  notifications: [],
  loading: false,
  errors: null,
  alert: new Alert(),
  tableDefaults: {
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    sortDesc: [],
    groupBy: [],
    groupDesc: [],
    mustSort: false,
    multiSort: false,
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
