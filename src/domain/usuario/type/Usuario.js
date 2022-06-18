export default class Usuario {
  constructor(
    id = '',
    email = '',
    nome = '',
    dataCriacao = '',
    filial = '',
    cargo = '',
    salario = 0,
    dataNascimento = '',
    cidadenascimento = '',
    obs = '',
    active = '',
    admin = '',
    remote = ''
  ) {
    this.id = id;
    this.email = email;
    this.nome = nome;
    this.dataCriacao = dataCriacao;
    this.filial = filial;
    this.cargo = cargo;
    this.salario = salario;
    this.dataNascimento = dataNascimento;
    this.cidadenascimento = cidadenascimento;
    this.obs = obs;
    this.active = active;
    this.admin = admin;
    this.remote = remote;
  }
}
