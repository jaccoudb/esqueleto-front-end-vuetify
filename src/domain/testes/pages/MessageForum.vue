<template>
  <!--  -->
  <v-container class="d-flex flex-column flex-grow-1">
    <v-expansion-panels
      class="mb-1"
      v-for="(message, i) in messages"
      :key="i"
      multiple
      :disabled="
        message.interactions && message.interactions.length > 0 ? false : true
      "
    >
      <!--  -->
      <v-expansion-panel>
        <!--  -->
        <v-expansion-panel-header
          :hide-actions="
            message.interactions && message.interactions.length > 0
              ? false
              : true
          "
        >
          <!--  -->
          <v-row align="center" class="spacer" no-gutters style="width: 100%">
            <!-- Avatar -->
            <v-col cols="auto" align="center" justify="center">
              <v-avatar :size="`${avatarSize}px`">
                <img :alt="message.name" :src="message.img" />
              </v-avatar>
            </v-col>

            <!-- Nome & Seção -->
            <v-col
              align-self="stretch"
              class="ml-2"
              cols="10"
              align="left"
              justify="center"
            >
              <v-card flat class="background-color:pink">
                <strong>{{ message.name }}</strong> - {{ message.section }}
                <small class="float-right">{{
                  message.data | formatDate(`${dataFormat}`)
                }}</small>
              </v-card>
              <!-- Mensagem -->
              <v-card class="pt-2" flat>
                {{ message.msg }}
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <!-- Tags -->
        <v-row>
          <v-chip-group column class="px-6 pb-2">
            <v-chip
              v-for="(tag, i) in message.tags"
              :key="i"
              class="ml-0 mr-2 black--text blue lighten-4"
              small
              caption
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-row>

        <v-expansion-panel-content color="white">
          <v-divider></v-divider>
          <v-list disabled class="text-subtitle-2">
            <v-list-item-group multiple readonly class="mx-2">
              <template v-for="(item, index) in message.interactions">
                <v-list-item :key="item.title">
                  <!-- Cabeçalho com nome, identificação e data de publicação -->
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.name }} - {{ item.section }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-caption text-right">
                      {{ item.data | formatDate(`${dataFormat}`) }}
                    </v-list-item-subtitle>

                    <!-- Corpo da mensagem principal do Fórum -->
                    <v-card flat class="text-justify">{{ item.msg }}</v-card>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-if="index + 1 < message.interactions.length"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
          <v-divider></v-divider>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- Campo de inserção mensagem -->
      <v-card
        class="d-flex flex-column flex-grow-1 px-2"
        v-if="!inputChat"
        style="border-radius: 0px"
        flat
      >
        <MessageInput
          :chave="message.id"
          @send-message="sendMessage($event)"
          :clearable="clearable"
          :maxlength="maxlength"
          :hintText="hintText"
          :counterLength="counterLength"
          :placeholder="placeholder"
          :uploadFiles="uploadFiles"
        />
      </v-card>
    </v-expansion-panels>
  </v-container>

  <!--  -->
</template>

<script>
/**
 * @file MessageForum
 * @brief Lista Interações entre usuários.
 * @params MessageInput Componente do campo de texto.
 * @params avatarSize Tamanho do avatar. Valor referente ao diâmetro.
 * @params dataFormat String padrão que a data apresentará.
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
          anexo: event.anexo,
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
    dataFormat: {
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
     * Habilita componente de upload arquivos.
     */
    uploadFiles: {
      type: Boolean,
      default: false,
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
