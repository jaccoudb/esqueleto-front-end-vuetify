<template>
  <div class="d-flex position-relative">
    <v-text-field
      ref="input"
      v-model="input"
      dense
      outlined
      :clearable="clearable"
      :maxlength="maxlength"
      :placeholder="`${$t('chat.message')}`"
      class="font-weight-bold position-relative"
      hide-details
      append-icon
      hint="This field uses maxlength attribute"
      counter
      @click="$emit('input-focus')"
      @keyup.enter="sendMessage"
    >
    </v-text-field>
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
    // Chave primária do componente
    chave: {
      type: [String, Number],
      default: '',
    },
    // Tamanho do campo de palavras
    maxlength: {
      type: [String, Number],
      default: 500,
    },
    // Define se permite campo limpar
    clearable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      input: '',
      rules: [(v) => v.length <= 25 || 'Max 25 characters'],
    };
  },
  methods: {
    // Adiciona emoji selecionado ao input
    insertEmoji(emoji) {
      this.input += emoji;
    },
    // Envia Mensagem e Limpa input
    sendMessage() {
      if (!this.input) return;

      this.$emit('send-message', { msg: this.input, chave: this.chave });
      this.input = '';
      this.$refs.input.focus();
    },
  },
};
</script>
