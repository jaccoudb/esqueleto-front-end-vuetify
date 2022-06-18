import axios from 'axios';
import handleAxiosResponseError from './handleAxiosResponseError';
import handleAxiosResponseSuccess from './handleAxiosResponseSuccess';
import store from '../store';

const http = axios.create({
  headers: {
    Content: 'application/x-www-form-urlencoded',
  },
  timeout: 10000,
});

http.interceptors.request.use(
  (defaults) => {
    const config = defaults;

    store.commit('configs/UNSET_ERROR');
    store.commit('configs/SET_LOADING');

    return config;
  },
  (errors) => Promise.reject(errors)
);

http.interceptors.response.use(
  handleAxiosResponseSuccess,
  handleAxiosResponseError
);

export default http;
