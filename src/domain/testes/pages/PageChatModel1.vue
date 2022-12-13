<template>
  <!--  -->
  <!-- <MessageForum /> -->
  <div>
    <MessageForum
      :avatarSize="64"
      :padraoData="'DD/MM/YYYY HH:mm:ss'"
      :messages="messages"
      :userInformations="userInformations"
      :clearable="true"
      :maxlength="150"
      @forum-message="messageReceived($event)"
      :hintText="`${$t('chat.message')}`"
      :counterLength="true"
      :placeholder="`${$t('chat.message')}`"
      :uploadFiles="true"
    />
  </div>
  <!--  -->
</template>

<script>
import MessageForum from './MessageForum.vue';

export default {
  beforeDestroy() {
    clearTimeout(this.timeoutGenerator);
  },
  components: {
    MessageForum,
  },
  created() {
    console.log(this.messages);

    // this.messages.forEach((i) => {
    //   if (i.id == 2) {
    //     i.tags = i.tags.filter((j) => j.id !== 2.1);
    //   }
    // });
  },
  data() {
    return {
      // demo random message timeout
      timeoutGenerator: null,
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
          interactions: [
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
          tags: [
            { name: 'Work', msg: 1.1, id: 1.1 },
            { name: 'Home Improvement', msg: 1.2, id: 1.2 },
            { name: 'Vacation', msg: 1.3, id: 1.3 },
            { name: 'Food', msg: 1.4, id: 1.4 },
            { name: 'Drawers', msg: 1.5, id: 1.5 },
            { name: 'Shopping', msg: 1.6, id: 1.6 },
            { name: 'Art', msg: 1.7, id: 1.7 },
            { name: 'Tech', msg: 1.8, id: 1.8 },
            { name: 'Creative Writing', msg: 1.9, id: 1.9 },
            { name: 'Drawers', msg: 1.1, id: 1.1 },
            { name: 'Shopping', msg: 1.11, id: 1.11 },
            { name: 'Art', msg: 1.12, id: 1.12 },
            { name: 'Tech', msg: 1.13, id: 1.13 },
            { name: 'Creative Writing', msg: 1.14, id: 1.14 },
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
          interactions: [],
          tags: [
            { name: 'Work', msg: 2, id: 2.1 },
            { name: 'Tech', msg: 1.13, id: 2.2 },
          ],
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
          interactions: [],
        },
      ],
      userInformations: {
        name: 'Bruno Jaccoud',
        section: 'Teste Teste',
      },
    };
  },
  methods: {
    messageReceived(event) {
      console.log(event);
    },
    userReceived(event) {
      console.log(event);
    },
    startChannel() {
      console.log('startChannel');
      clearTimeout(this.timeoutGenerator);
      this.sendRandom();
    },
    sendRandom() {
      console.log(this.timeoutGenerator);
      this.timeoutGenerator = setTimeout(() => {
        console.log('Recarregou');
        this.sendRandom();
      }, 10000);
    },
  },
  mounted() {
    console.log('mounted');
    this.startChannel(this.$route.params.id);
  },
};
</script>
