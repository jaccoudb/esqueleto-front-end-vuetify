import moment from 'moment';

export default {
  methods: {
    formatDate(value) {
      return value ? moment(value).format('DD/MM/YYYY') : '';
    },
  },
};
