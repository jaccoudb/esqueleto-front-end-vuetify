export default class FilterUsuario {
  constructor(
    id = '',
    email = '',
    nome = '',
    dataCriacao = '',
    filial = '',
    cargo = '',
    dataNascimento = '',
    cidadenascimento = ''
  ) {
    this.id = id;
    this.email = email;
    this.nome = nome;
    this.dataCriacao = dataCriacao;
    this.filial = filial;
    this.cargo = cargo;
    this.dataNascimento = dataNascimento;
    this.cidadenascimento = cidadenascimento;
  }
}
