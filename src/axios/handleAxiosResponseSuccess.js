import store from '../store';

const handleAxiosResponseSuccess = (response) => {
  store.commit('configs/UNSET_LOADING');
  store.commit('configs/UNSET_ERROR');

  return response;
};

export default handleAxiosResponseSuccess;
