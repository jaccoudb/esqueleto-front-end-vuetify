export const setSelectData = async ({ commit }, props) => {
  commit('SET_SELECT_DATA', props);
};

export const validaEstado = async ({ commit }) => {
  commit('VALIDA_ESTADO');
};

export const estadoDiscrepancia = async ({ commit }) => {
  commit('ESTADO_DISCREPANCIA');
};
