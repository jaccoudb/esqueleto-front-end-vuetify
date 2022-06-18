const LOGIN = (state, props) => {
  state.tokenUsuarioKeycloak = props.tokenUsuarioKeycloak;
  state.usuarioLogado = props.usuarioLogado;
  state.unidadeLogada = props.unidadeLogada;
};

const LOGOUT = (state) => {
  state.tokenUsuarioKeycloak = {};
  state.usuarioLogado = {};
  state.unidadeLogada = {};
};

export default { LOGIN, LOGOUT };
