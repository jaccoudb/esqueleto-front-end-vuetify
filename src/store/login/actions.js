export const login = async ({ commit }, props) => {
  commit('LOGIN', props);
};

export const logout = ({ commit }) => {
  commit('LOGOUT');
};
