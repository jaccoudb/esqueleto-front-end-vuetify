<template>
  <!--  -->
  <div class="d-flex flex-grow-1 flex-column">
    <v-card
      class="d-flex flex-column flex-grow-1"
      outlined
      v-for="(message, i) in messages"
      :key="i"
    >
      <v-list-item three-line>
        <v-list-item-avatar size="64" horizontal class="ml-2"
          ><img :alt="message.name" :src="message.img"
        /></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ message.name }}
            <span class="font-weight-regular">- {{ message.section }}</span>
            <small class="float-right font-weight-regular">
              {{ message.data | formatDate(`${padraoData}`) }}
            </small>
          </v-list-item-title>

          <v-list-item-subtitle class="mb-2">
            {{ message.msg }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-card-actions>
        <v-btn outlined rounded text> Button </v-btn>
      </v-card-actions> -->
    </v-card>

    <!-- Campo de inserção mensagem -->
    <v-card class="d-flex flex-column flex-grow-1 pa-2" v-if="!inputChat">
      <MessageInput
        @send-message="sendMessage($event)"
        :clearable="clearable"
        :maxlength="maxlength"
        :hintText="hintText"
        :counterLength="counterLength"
        :placeholder="placeholder"
      />
    </v-card>
  </div>
  <!--  -->
</template>

<script>
/**
 * @file MessageForum
 * @brief Lista Interações entre usuários.
 * @params MessageInput Componente do campo de texto.
 * @params avatarSize Tamanho do avatar. Valor referente ao diâmetro.
 * @params padraoData String padrão que a data apresentará.
 * @params messages Array com dados referente as interações.
 * @params userInformations Objeto de informações do usuário que está realizando o comentário.
 * @params inputChat Booleano que habilita/desabilita a caixa de resposta.
 */
import MessageInput from './MessageInput.vue';

export default {
  computed: {
    disabledComments() {
      return this.data;
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MessageInput,
  },
  methods: {
    sendMessage(event) {
      const usuario = this.messages.filter((item) => item.id === event.chave);
      let newMsg = {};

      usuario.forEach((i) => {
        const idUser = i.interactions.length + 1;
        newMsg = {
          id: idUser,
          name: this.userInformations.name,
          section: this.userInformations.section,
          data: new Date().getTime(),
          msg: event.msg,
        };
        i.interactions.push(newMsg);
      });

      this.$emit('forum-message', newMsg);
      this.$emit('forum-user-message', usuario);
    },
  },
  props: {
    /**
     * Tamanho do avatar. Valor referente ao diâmetro.
     */
    avatarSize: {
      type: [String, Number],
      default: 64,
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
    /**
     * Texto de dica.
     */
    hintText: {
      type: String,
      default: null,
    },
    /**
     * Habilita/desabilita a caixa de respostas.
     */
    inputChat: {
      type: Boolean,
      default: false,
    },
    /**
     * Tamanho do campo de palavras.
     */
    maxlength: {
      type: [String, Number],
      default: 500,
    },
    /**
     * Array com dados referente as interações.
     */
    messages: {
      type: Array,
      default: () => [],
    },
    /**
     * Padrão que a data apresentará.
     */
    padraoData: {
      type: String,
      default: 'DD/MM/YYYY HH:mm:ss',
    },
    /**
     * Define o texto do espaço reservado da entrada
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * Informações do usuário que está realizando o comentário.
     */
    userInformations: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
