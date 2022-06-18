<template>
  <v-snackbar
    elevation="24"
    v-model="toast.show"
    :timeout="toast.timeout"
    :value="true"
    :color="toast.color"
    :right="right"
    :left="true"
    :vertical="vertical"
    :multi-line="multiLine"
    :top="top"
    :bottom="bottom"
    :centered="centered"
    max-width="0"
    >{{ toast.message }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="toast.show = false">
        <v-icon>mdi-close-octagon-outline</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      top: true,
      right: true,
      left: false,
      message: '',
      bottom: false,
      vertical: true,
      multiLine: true,
      centered: false,
    };
  },
  computed: {
    ...mapState('configs', ['toast']),
  },
};
</script>
