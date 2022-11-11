<template>
  <div class="d-flex position-relative">
    <v-text-field
      ref="input"
      class="font-weight-bold position-relative"
      v-model="input"
      :dense="dense"
      :outlined="outlined"
      :clearable="clearable"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :hint="hintText"
      :counter="counterLength"
      @keydown.enter.prevent="sendMessage"
      @click="$emit('input-focus')"
      @click:append-outer="sendMessage"
    >
      <!-- Upload Files -->
      <template v-slot:append>
        <v-file-input
          v-model="file"
          dense
          hide-input
          small-chips
          show-size
          multiple
          :rules="inputRules"
          @change="selectFile"
        ></v-file-input>
      </template>
    </v-text-field>
    <!-- Botão Externo de Enviar -->
    <v-btn
      fab
      small
      class="mx-1 primary"
      :disabled="!input"
      @click="sendMessage"
      ><v-icon small>mdi-send</v-icon></v-btn
    >
  </div>
</template>

<script>
/**
 * @file MessageInput
 * @brief Campo de mensagem.
 *
 * @params chave Chave primária do componente.
 * @params maxlength Tamanho do campo de palavras.
 * @params clearable Define se permite campo limpar.
 * @params hintText Texto de dica.
 * @params counterLength Cria contador para comprimento de entrada.
 * @params outlined Aplica o estilo delineado à entrada.
 * @params dense Reduz a altura de entrada.
 * @params placeholder Define o texto do espaço reservado da entrada
 */
/*
|---------------------------------------------------------------------
| Mensagem Box Componente
|---------------------------------------------------------------------
|
| Envia mensagens ao componente pai
|
*/
export default {
  props: {
    /**
     * Chave primária do componente.
     */
    chave: {
      type: [String, Number],
      default: '',
    },
    /**
     * Define se permite campo limpar.
     */
    clearable: {
      type: Boolean,
      default: true,
    },
    /**
     * Cria contador para comprimento de entrada.
     */
    counterLength: {
      type: [Boolean, Number, String],
      default: null,
    },
    /**      message: 'Hey!',
      marker: true,
     * Reduz a altura de entrada
     */
    dense: {
      type: Boolean,
      default: true,
    },
    /**
     * Texto de dica.
     */
    hintText: {
      type: String,
      default: null,
    },
    /**
     * Tamanho do campo de palavras.
     */
    maxlength: {
      type: [String, Number],
      default: 500,
    },
    /**
     * Define o texto do espaço reservado da entrada
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * Aplica o estilo delineado à entrada.
     */
    outlined: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      file: null,
      input: '',
      inputRules: [
        (value) => !!value || 'Por favor, selecione um arquivo',
        (value) =>
          !value ||
          value.type == 'application/pdf' ||
          'O arquivo deve ser em formato pdf',
        (value) =>
          !value ||
          value.size < 15000000 ||
          'O arquivo não pode ser maior que 15MB',
      ],
    };
  },
  methods: {
    /**
     * Adiciona emoji selecionado ao input
     */
    insertEmoji(emoji) {
      this.input += emoji;
    },
    /**
     * Envia Mensagem e Limpa input
     */
    sendMessage() {
      if (!this.input) return;

      this.$emit('send-message', { msg: this.input, chave: this.chave });
      this.input = '';
      this.$refs.input.focus();
    },
    upload() {
      alert('click:append');
    },
    selectFile(event) {
      console.log(event);
    },
  },
};
</script>
