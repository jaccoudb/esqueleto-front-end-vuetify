<template>
  <!-- https://vuetifyjs.com/en/components/timelines/#advanced -->

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
            <v-col align-self="stretch" class="ml-2" cols="11">
              <v-card flat>
                <strong>{{ message.name }}</strong> - {{ message.section }}
                <small class="float-right">{{ message.data }}</small>
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
          <v-card-text v-text="lorem"></v-card-text>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-card
        class="d-flex flex-column flex-grow-1 pa-2"
        v-if="message.response"
      >
        <message-input @send-message="sendMessage" />
      </v-card>
    </v-expansion-panels>
  </v-container>

  <!--  -->

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
        img: 'https://lux-admin-pro.indielayer.com/images/avatars/avatar2.svg',
        name: 'Mattew',
        section: 'avatar2',
        data: '11/02/2022',
        msg: 'Welcome to Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify Vuetify !',
        response: true,
        readonly: true,
      },
      {
        img: 'https://lux-admin-pro.indielayer.com/images/avatars/avatar4.svg',
        name: 'Fatima',
        section: 'Social',
        data: '12/02/2022',
        msg: 'Twitter',
        response: true,
        readonly: false,
      },
      {
        img: 'https://lux-admin-pro.indielayer.com/images/avatars/avatar6.svg',
        name: 'Xin',
        section: 'Asiatico',
        data: '13/02/2022',
        msg: 'China',
        response: false,
        readonly: false,
      },
    ],
    lorem:
      'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
  }),
  methods: {
    sendMessage() {
      console.log('sendMessage');
    },
  },
};
</script>
