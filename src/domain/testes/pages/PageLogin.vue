<template>
  <div>
    <!--  -->
    <confirm-with-password
      :persistent="true"
      v-model="showConfirmPassword"
      @confirm="confirm()"
    />

    <!-- Botões de Ação -->
    <v-row align="center" justify="space-between" class="mx-auto">
      <v-btn dark tile color="red darken-2" @click="clear">
        {{ $t('cancel') }}
      </v-btn>
      <v-btn dark tile color="#009e0f" @click="submit">
        {{ $t('confirm.tag') }}
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import ConfirmWithPassword from './ConfirmWithPassword.vue';
export default {
  components: {
    ConfirmWithPassword,
  },
  data() {
    return {
      showConfirmPassword: false,
    };
  },
  methods: {
    clear() {
      console.log('clear');
    },
    submit() {
      console.log('teste');
      this.showConfirmPassword = true;
    },
  },
};
</script>

<style scoped>
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
</style>
