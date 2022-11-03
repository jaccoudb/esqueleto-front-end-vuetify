import i18n from '@/plugins/vue-i18n';

const columns = [
  {
    text: i18n.t('usuario.fields.id'),
    align: 'start',
    value: 'id',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.email'),
    align: 'start',
    value: 'email',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.nome'),
    align: 'start',
    value: 'nome',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.dataCriacao'),
    align: 'start',
    value: 'dataCriacao',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.filial'),
    align: 'start',
    value: 'filial',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.cargo'),
    align: 'start',
    value: 'cargo',
    sortable: true,
  },
  {
    text: i18n.t('usuario.fields.salario'),
    align: 'start',
    value: 'salario',
    sortable: true,
  },
  {
    text: i18n.t('actions'),
    align: 'start',
    value: 'action',
    sortable: false,
  },
];

export default columns;
