<template>
  <!-- https://vuetifyjs.com/en/components/timelines/#advanced -->
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(message, i) in messages"
            :key="i"
            hide-actions
          >
            <v-expansion-panel-header>
              <v-row align="center" class="spacer">
                <v-col cols="12" md="2" align="center" justify="center">
                  <v-avatar size="60px">
                    <img
                      v-if="message.avatar"
                      alt="Avatar"
                      :src="message.avatar"
                    />

                    <v-icon
                      v-else
                      :color="message.color"
                      v-text="message.icon"
                    ></v-icon>
                  </v-avatar>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ message.name }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        ({{ message.unidade }})
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        {{ message.data }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <!--  -->
                </v-col>
                <v-col cols="12" md="10" align="baseline" justify="center">
                  <!-- <v-card-text v-text="lorem"></v-card-text> -->
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-container fluid>
                <v-textarea
                  clearable
                  clear-icon="mdi-close-circle"
                  label="Insira a sua resposta!"
                  v-model="text[i]"
                  outlined
                ></v-textarea>
                <v-row class="d-flex justify-end">
                  <v-btn color="primary" @click="answer(i)"> Responder </v-btn>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: 'https://avatars0.githubusercontent.com/u/9064061?v=4&s=460',
        name: 'John Leider',
        unidade: 'CELOG',
        data: '11/02/2022',
        msg: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
      },
      {
        name: 'Social',
        avatar: 'https://avatars0.githubusercontent.com/u/9064063?v=4&s=460',
        unidade: 'SILOMS',
        data: '11/02/2022',
        msg: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
      },
      {
        name: 'Promos',
        unidade: 'CCA',
        avatar: 'https://avatars0.githubusercontent.com/u/9064064?v=4&s=460',
        data: '11/02/2022',
        msg: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
      },
    ],
    cycle: true,
    date: null,
    text: {},
    trip: {
      name: '',
      location: null,
      start: null,
      end: null,
    },
    locations: [
      'Australia',
      'Barbados',
      'Chile',
      'Denmark',
      'Ecuador',
      'France',
    ],
  }),
  methods: {
    answer(value) {
      console.log(value);
    },
  },
};
</script>
