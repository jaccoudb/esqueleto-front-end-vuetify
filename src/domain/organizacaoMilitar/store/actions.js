const resources = `${process.env.VUE_APP_API_URL}/api/unidades`;

import http from '@/axios';
import Alert from '@/type/alert';

export const selectUnidade = async ({ commit }, props) => {
  commit('SELECT_UNIDADE', props);
};

export const buildUnidadeList = async ({ commit }) => {
  const url = `${resources}/all`;

  try {
    const response = await http.get(url);

    commit('BUILD_UNIDADE_LIST', {
      unidades: response.data,
    });
  } catch (error) {
    const alert = new Alert('organizacaoMilitar.listFail', 'error', true);
    commit('configs/SET_ALERT', alert);
  }
};
