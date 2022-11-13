<template>
  <div>
    <MessageInput
      :chave="chave"
      @send-message="sendMessage($event)"
      :clearable="clearable"
      :maxlength="maxlength"
      :hintText="hintText"
      :counterLength="counterLength"
      :placeholder="placeholder"
      :uploadFiles="upload"
    />
  </div>
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
      upload: true,
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
