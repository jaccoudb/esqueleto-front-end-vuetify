import Vuetify from '../../plugins/vuetify';

export default {
  /**
   * Main Toast
   */
  showToast: (state, toast) => {
    const { color, timeout, message } = toast;

    state.toast = {
      message,
      color,
      timeout,
      show: true,
    };
  },
  hideToast: (state) => {
    state.toast.show = false;
  },
  resetToast: (state) => {
    state.toast = {
      show: false,
      color: 'black',
      message: '',
      timeout: 3000,
    };
  },

  /**
   * Theme and Layout
   */
  setGlobalTheme: (state, theme) => {
    Vuetify.framework.theme.dark = theme === 'dark';
    state.globalTheme = theme;
  },
  setRTL: (state, isRTL) => {
    Vuetify.framework.rtl = isRTL;
    state.isRTL = isRTL;
  },
  setContentBoxed: (state, isBoxed) => {
    state.isContentBoxed = isBoxed;
  },
  setMenuTheme: (state, theme) => {
    state.menuTheme = theme;
  },
  setToolbarTheme: (state, theme) => {
    state.toolbarTheme = theme;
  },
  setTimeZone: (state, zone) => {
    state.time.zone = zone;
  },
  setTimeFormat: (state, format) => {
    state.time.format = format;
  },
  setCurrency: (state, currency) => {
    state.currency = currency;
  },
  setLanguage: (state, lang) => {
    state.lang = lang;
  },
  setToolbarDetached: (state, isDetached) => {
    state.isToolbarDetached = isDetached;
  },
  PUSH_NOTIFICATION(state, value) {
    state.notifications = [...state.notifications, value];
  },
  CLEAR_NOTIFICATIONS(state) {
    state.notifications = [];
  },
  SET_LOADING(state) {
    state.loading = true;
  },
  UNSET_LOADING(state) {
    state.loading = false;
  },
  SET_ERROR(state, error) {
    state.errors = error;
  },
  UNSET_ERROR(state) {
    state.errors = null;
  },
  SET_ALERT(state, alert) {
    state.alert = alert;
  },
  UNSET_ALERT(state) {
    state.alert = { message: '', type: '', show: false };
  },
};
