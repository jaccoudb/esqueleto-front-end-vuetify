<template>
  <v-dialog v-model="show" persistent max-width="30em">
    <v-card>
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>
      <v-card-text>{{ detail }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn depressed color="primary" @click="confirm">
          {{ yeslabel }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'alert',
    },
    detail: {
      type: String,
      required: true,
    },

    value: { type: Boolean, default: false },

    yeslabel: {
      type: String,
      default: 'ok',
    },
    icon: {
      type: String,
      default: 'fas fa-exclamation',
    },
  },

  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    confirm() {
      this.$emit('confirm');
      this.show = false;
    },
  },
};
</script>
