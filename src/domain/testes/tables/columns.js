import i18n from '@/plugins/vue-i18n';

const columns = [
  {
    text: i18n.t('usuario.fields.id'),
    field: 'id',
    align: 'start',
    value: 'id',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.email'),
    field: 'email',
    align: 'start',
    value: 'email',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.nome'),
    field: 'nome',
    align: 'start',
    value: 'nome',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.dataCriacao'),
    field: 'dataCriacao',
    align: 'start',
    value: 'dataCriacao',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.filial'),
    field: 'filial',
    align: 'start',
    value: 'filial',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.cargo'),
    field: 'cargo',
    align: 'start',
    value: 'cargo',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.salario'),
    field: 'salario',
    align: 'start',
    value: 'salario',
    sortable: true,
  },
  {
    text: i18n.t('actions'),
    field: 'action',
    align: 'start',
    value: 'action',
    sortable: false,
  },
];

export default columns;
