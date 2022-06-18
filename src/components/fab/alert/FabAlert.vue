<template>
  <v-alert
    v-model="alert.open"
    outlined
    dismissible
    :type="alert.type"
    style="background: #ffffff !important"
  >
    {{ $t(alert.text) }}
  </v-alert>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('configs', ['alert']),
  },
};
</script>
