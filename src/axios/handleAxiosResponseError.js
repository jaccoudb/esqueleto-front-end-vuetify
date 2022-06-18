import Error from '../type/error';
import Alert from '../type/alert';
import store from '../store';

export default function handleAxiosResponseError(error) {
  store.commit('configs/UNSET_LOADING');

  const errorObject = new Error();

  if (!error.response) {
    errorObject.status = 0;
    errorObject.message = 'Network Error';
    errorObject.detail = 'errors.network';
    store.commit('configs/SET_ERROR', errorObject);

    const alert = new Alert('errors.network', 'error', true);
    store.commit('configs/SET_ALERT', alert);

    return Promise.reject(errorObject);
  }

  errorObject.status = error.response.status;
  errorObject.message = error.response.data.error;

  switch (error.response.status) {
    case 401:
      errorObject.detail = 'errors.401';
      break;
    case 403:
      errorObject.detail = 'errors.403';
      break;
    case 400:
      errorObject.detail =
        error.response.data.objects === undefined
          ? error.response.data.detail
          : 'errors.400';

      errorObject.validators =
        error.response.data.objects === undefined
          ? {}
          : error.response.data.objects;
      break;
    case 404:
      errorObject.detail = 'errors.404';
      break;
    case 500:
      errorObject.detail = 'errors.500';
      break;
    default:
      errorObject.detail = 'errors.generic';
  }
  store.commit('configs/SET_ERROR', errorObject);

  const alert = new Alert(errorObject.detail, 'error', true);
  store.commit('configs/SET_ALERT', alert);

  return Promise.reject(errorObject);
}
