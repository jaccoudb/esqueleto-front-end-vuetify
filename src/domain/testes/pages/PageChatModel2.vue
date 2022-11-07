<template>
  <!--  -->
  <v-container class="d-flex flex-column flex-grow-1">
    <v-expansion-panels
      v-for="(message, i) in messages"
      :key="i"
      multiple
      class="mb-1"
      :readonly="message.readonly"
    >
      <!--  -->
      <v-expansion-panel>
        <!--  -->
        <v-expansion-panel-header>
          <!--  -->
          <v-row align="center" class="spacer" no-gutters>
            <!-- Avatar -->
            <v-col cols="auto" align="center" justify="center">
              <v-avatar size="64px">
                <img :alt="message.name" :src="message.img" />
              </v-avatar>
            </v-col>

            <!-- Nome & Seção -->
            <v-col
              align-self="stretch"
              class="ml-2"
              cols="11"
              align="left"
              justify="center"
            >
              <v-card flat>
                <strong>{{ message.name }}</strong> - {{ message.section }}
                <small class="float-right">{{
                  message.data | formatDate('DD/MM/YYYY HH:mm:ss')
                }}</small>
              </v-card>
              <!-- Mensagem -->
              <v-card class="pt-2" flat>
                {{ message.msg }}
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-divider></v-divider>
          <v-list disabled class="text-subtitle-2">
            <v-list-item-group multiple readonly class="mx-2">
              <template v-for="(item, index) in message.interacoes">
                <v-list-item :key="item.title">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.name }} - {{ item.section }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-caption text-right">
                      {{ item.data | formatDate('DD/MM/YYYY HH:mm:ss') }}
                    </v-list-item-subtitle>

                    <!-- <v-list-item-action-text
                    v-text="item.data"
                  ></v-list-item-action-text> -->

                    <v-card flat class="text-justify">{{ item.msg }}</v-card>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-if="index + 1 < message.interacoes.length"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-card
        class="d-flex flex-column flex-grow-1 pa-2"
        v-if="message.response"
      >
        <MessageInput :chave="message.id" @send-message="sendMessage($event)" />
      </v-card>
    </v-expansion-panels>
  </v-container>

  <!--  -->
</template>

<script>
import MessageInput from './MessageInput.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MessageInput,
  },
  data: () => ({
    messages: [
      {
        id: 1,
        img: '/images/avatars/avatar1.svg',
        name: 'Mattew',
        section: 'Seção de Trabalho',
        data: '2022-11-01T09:25:32Z',
        msg: 'Percebemos, cada vez mais, que a crescente influência da mídia faz parte de um processo de gerenciamento das direções preferenciais no sentido do progresso.',
        response: true,
        readonly: false,
        interacoes: [
          {
            id: 1,
            name: 'Fatima',
            section: 'Social',
            data: '2022-11-02T03:14:12Z',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum id diam ac fringilla. Pellentesque eu justo non mauris molestie faucibus. Sed ornare, nulla vel accumsan volutpat, lectus ante efficitur lacus, et maximus ipsum enim in dolor. Ut arcu ipsum, scelerisque at dapibus vel, eleifend quis metus. Donec condimentum convallis massa in luctus. Donec est nibh, bibendum sed quam in, posuere dignissim risus. Fusce ut tellus non arcu porta ultrices eu ac risus. Duis eget orci vel integer.',
          },
          {
            id: 2,
            name: 'Mattew',
            section: 'Work',
            data: '2022-11-03T01:00:01Z',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu euismod erat, et posuere mi. Sed pellentesque ex id enim euismod, consequat aliquet arcu porta. Suspendisse mattis, leo sit amet egestas blandit, ligula erat tempus justo, ut molestie.',
          },
          {
            id: 3,
            name: 'Xin',
            section: 'Fun',
            data: '2022-11-04T03:14:12Z',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero risus, pellentesque eu malesuada ut, accumsan eget felis. Praesent faucibus nec at.',
          },
        ],
      },
      {
        id: 2,
        img: '/images/avatars/avatar4.svg',
        name: 'Fatima',
        section: 'Seção Social',
        data: '2022-11-02T19:17:12Z',
        msg: 'Não obstante, a competitividade nas transações comerciais causa impacto indireto na reavaliação dos índices pretendidos.',
        response: true,
        readonly: true,
        interacoes: [],
      },
      {
        id: 3,
        img: '/images/avatars/avatar6.svg',
        name: 'Xin',
        section: 'Seção Social',
        data: '2022-11-06T22:19:59Z',
        msg: 'Caros amigos, a competitividade nas transações comerciais exige a precisão e a definição do levantamento das variáveis envolvidas.',
        response: false,
        readonly: false,
        interacoes: [],
      },
    ],
    lorem:
      'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
  }),
  methods: {
    sendMessage(event) {
      const usuario = this.messages.filter((item) => item.id === event.chave);

      usuario.forEach((i) => {
        const idUser = i.interacoes.length + 1;
        i.interacoes.push({
          id: idUser,
          name: 'Fatima',
          section: 'Social',
          data: new Date().getTime(),
          msg: event.msg,
        });
      });
    },
  },
};
</script>
