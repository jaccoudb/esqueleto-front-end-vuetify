import Vue from 'vue';
import moment from 'moment-timezone';
import store from '../store';

Vue.filter('humanTImeFromNow', (value) => {
  const { zone } = store.state.configs.time;

  if (value) {
    return moment(value).tz(zone).fromNow();
  }

  return '';
});
