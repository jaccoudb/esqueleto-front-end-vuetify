const showToast = ({ state, commit }, message) => {
  if (state.toast.show) commit('hideToast');

  setTimeout(() => {
    commit('showToast', {
      color: 'primary',
      message,
      timeout: 3000,
    });
  });
};

const showError = ({ state, commit }, message) => {
  if (state.toast.show) commit('hideToast');

  setTimeout(() => {
    commit('showToast', {
      color: 'error',
      message,
      timeout: 10000,
    });
  });
};

const showSuccess = ({ state, commit }, message) => {
  if (state.toast.show) commit('hideToast');

  setTimeout(() => {
    commit('showToast', {
      color: 'success',
      message,
      timeout: 3000,
    });
  });
};

export default {
  showToast,
  showError,
  showSuccess,
};
