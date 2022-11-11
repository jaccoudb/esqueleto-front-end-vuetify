<template>
  <!--  -->
  <!-- <MessageInput /> -->
  <v-card
    class="d-flex flex-column flex-grow-1 pt-2 pb-0 pr-2 pl-2 mt-1"
    style="border-radius: 0px"
    flat
  >
    <MessageInput
      :chave="chave"
      @send-message="sendMessage($event)"
      :clearable="clearable"
      :maxlength="maxlength"
      :hintText="hintText"
      :counterLength="counterLength"
      :placeholder="placeholder"
    />
  </v-card>
  <!--  -->
</template>

<script>
import MessageInput from './MessageInput.vue';

export default {
  components: {
    MessageInput,
  },
  data() {
    return {
      chave: 1,
      clearable: true,
      maxlength: 100,
      hintText: 'hintText',
      counterLength: true,
      placeholder: 'placeholder',
    };
  },
  methods: {
    sendMessage(event) {
      console.log('sendMessage: ');
      console.log(event);
    },
  },
};
</script>
