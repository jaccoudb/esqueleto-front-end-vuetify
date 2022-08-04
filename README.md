# Esqueleto de Aplicação VUE 2 JS com VUETFY 2

## Instalar as dependencias

```
npm install
ou
npm i
```

## Modos de operação

- development - Modo de desenvolvimento local
- production - Modo de produção
- homolog - Modo de produção, mas para servidor de homologação (É uma alternativa de configuração não uma regra)

##### Arquivos de configuração de ambiente

Está sendo usado o método de configuração ambiente padrão proposto pelo [Vue-Cli](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables) que consiste nos arquivos .env

- .env - Padrão para todos os ambientes
- .env.local - Sobrescreve o .env mas não é enviado para o git
- .env.development - Configuração usado em modo de desenvolvimento
- .env.development.local - Idem .env.local mas em desenvolvimento
- .env.homolog - Configuração específica do tipo personalizado homolog
- .env.development.local - Idem .env.local mas em homologação
- .env.production - Configuração específica de produção.Arquivo pode ser desnecessário caso coloque as configurações de produção direto no .env
- .env.production.local - Idem .env.local mas em produção

Dentro dos .env é necessário que a configuração personalizada a ser usado dentro do projeto vue seja escrito com o prefixo <strong>VUE*APP*</strong>
Exemplo

```
VUE_APP_API_URL=http://localhost:8081
```

E pose ser usado dentro do código chamando <strong>process.env.VUE*APP*\* </strong>
Exemplo

```
const url = `${process.env.VUE_APP_API_URL}/api/unidades`;
ou
const url = process.env.VUE_APP_API_URL + '/api/unidades';
```

### development

##### execução

```
npm run serve
ou
npm run dev
```

Por padrão será executado na máquina local na url http://localhost:8080 com live-reload do webpack.

##### configuração

Neste caso a configuração será lida na ordem abaixo , não tendo o arquivo ele pula para o proximo

- .env.development.local
- .env.development
- .env.local
- .env

### production

##### execução

```
npm run build
```

Será gerado o conteúdo minificado e otimizado da aplicação na pasta raiz do projeto no diretório dist, que serve como deploy padrão para node

##### configuração

Neste caso a configuração será lida na ordem abaixo , não tendo o arquivo ele pula para o proximo

- .env.production.local
- .env.production
- .env.local
- .env

### homolog

##### execução

```
npm run homolog
```

Será gerado o conteúdo minificado e otimizado da aplicação na pasta raiz do projeto no diretório dist, que serve como deploy padrão para node, mas neste caso com arquivos de ambiênte próprios para homologação (É uma alternativa de configuração não uma regra)

##### configuração

Neste caso a configuração será lida na ordem abaixo , não tendo o arquivo ele pula para o proximo

- .env.homolog.local
- .env.homolog
- .env.local
- .env

## Lint

Estamos usando o padrão de lint @vue/prettier para que não tenhamos mudanças significativa de formatação de código de usuário para usuário.As configurações podem ser customizadas no arquivo .prettierrc, mas aconselho não alterar muito para o editor não ficar formatando o código a cada usuário diferente gerando muitas linhas de alteração no git.

## Extensões do vscode

As extenções do ambiente Vue para Vscode para VUE não são tão boas como as extensõens de Angular e React e estamos sempre tentando otimizar/procurar as melhores alternativas.Mas no momento recomendamos estas bibliotecas:

```
christian-kohler.npm-intellisense
dbaeumer.vscode-eslint
esbenp.prettier-vscode
octref.vetur
sdras.vue-vscode-snippets
shd101wyy.markdown-preview-enhanced
tombonnike.vscode-status-bar-format-toggle
xabikos.JavaScriptSnippets
```

Lista gerada apartir do comando no terminal

```
code --list-extensions
```

## Configurações do editor

Com várias extenções instaladas, algumas configurações podem ser conflitantes,abaixo uma sugestão de configuração do editor do vscode

Arquivo settings.json do vscode ( ctr + p settings.json)

```
{
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "eslint.alwaysShowStatus": true,
  "eslint.debug": true,
  "eslint.lintTask.enable": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Git Semântico

```
chore: add Oyster build script    //Pequenas alterações que não são novas funcionalidades.
docs: explain hat wobble          //Semelhante a uma wiki; documentações etc.
feat: add beta sequence           //Criação de Nova funcionalidade;
fix: remove error message         //Correção de bugs
refactor: share logic 4d3d3d3     //Refatoração de um código
style: convert tabs to spaces     //Alteração em estilos, formatação de código etc.
test: ensure that increment       //Criação de testes da sua aplicação
```
