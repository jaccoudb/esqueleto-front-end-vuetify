<template>
  <v-app>
    Formulário: {{ form }}
    <v-container>
      <v-layout align-center justify-center>
        <FormUser @isValid="form = true" />
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import FormUser from '../form/FormUser.vue';
export default {
  components: {
    FormUser,
  },
  data: () => ({
    form: false,
  }),
};
</script>
