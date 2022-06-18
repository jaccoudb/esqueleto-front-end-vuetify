const SET_SELECT_DATA = (state, props) => {
  state.selectData = props;
};

const VALIDA_ESTADO = (state) => {
  state.selectData.forEach((item) => {
    item.cargo = 'ACEITO';
  });
};

const ESTADO_DISCREPANCIA = (state) => {
  state.selectData.forEach((item) => {
    item.cargo = 'RECUSA';
  });
};

export default { SET_SELECT_DATA, VALIDA_ESTADO, ESTADO_DISCREPANCIA };
