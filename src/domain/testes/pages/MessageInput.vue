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
      <template v-slot:append v-if="uploadFiles">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              icon
              plain
              color="light-blue accent-4"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-cloud-upload-outline</v-icon>
            </v-btn>
          </template>
          <!--  -->
          <v-card width="500px" class="pa-3 border-style: solid">
            <UploadFiles @input-files-upload="inputFiles($event)" />
          </v-card>
        </v-menu>
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
 * @brief Campo de mensagens.
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
import UploadFiles from './UploadFiles.vue';
export default {
  components: {
    UploadFiles,
  },
  data() {
    return {
      file: null,
      input: '',
      inputs: '',
      menu: '',
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
    inputFiles(event) {
      this.menu = false;
      console.log(event);
    },
    upload() {
      alert('click: upload file');
    },
    selectFile(event) {
      console.log(event);
    },
  },
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
    /**
     * Habilita componente de upload arquivos.
     */
    uploadFiles: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
