const SELECT_UNIDADE = (state, props) => {
  state.unidade = props;
};

const BUILD_UNIDADE_LIST = (state, props) => {
  state.unidades = props.unidades;
  state.unidade = state.unidade || props.unidades[0].value;
};

export default { SELECT_UNIDADE, BUILD_UNIDADE_LIST };
