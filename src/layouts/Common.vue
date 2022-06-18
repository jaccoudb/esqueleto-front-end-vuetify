<template>
  <div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <fab-alert />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FabAlert from '@/components/fab/alert/FabAlert.vue';

export default {
  components: { FabAlert },
  computed: {
    ...mapState('configs', ['loading']),
  },
};
</script>
