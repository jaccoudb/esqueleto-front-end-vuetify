<template>
  <ValidationObserver ref="obs">
    <v-card class="elevation-12" slot-scope="{ invalid, validated }">
      Form Inválido: {{ invalid }}
      <br />
      Form validado: {{ validated }}

      <v-toolbar dark color="primary">
        <v-toolbar-title>VeeValidate Providers</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <ValidationProvider name="sample.view.field1" rules="required">
            <v-text-field
              slot-scope="{ errors, valid }"
              v-model="field1"
              :error-messages="errors"
              :success="valid"
              :label="$t('sample.view.field1')"
              required
              @change="
                changeInput(invalid, validated);
                isValid(invalid, validated);
              "
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="sample.view.field2" rules="required">
            <v-text-field
              slot-scope="{ errors, valid }"
              v-model="field2"
              :error-messages="errors"
              :success="valid"
              :label="$t('sample.view.field2')"
              required
              @change="
                changeInput(invalid, validated);
                isValid(invalid, validated);
              "
            ></v-text-field>
          </ValidationProvider>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="clear" color="primary">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="submit" color="secundary">Validate</v-btn>
        <v-btn color="sucess" @click="submit" :disabled="invalid || !validated"
          >Sign Up</v-btn
        >
      </v-card-actions>
    </v-card>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  data: () => ({
    field1: '',
    field2: '',
    form: true,
  }),
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    async clear() {
      this.field1 = this.field2 = '';
      this.$nextTick(() => {
        this.$refs.obs.reset();
      });
    },
    async submit() {
      const result = await this.$refs.obs.validate();
      console.log(result);
      this.$emit('isValid', 'false');
    },
    changeInput: async function (invalid, validated) {
      console.log(invalid);
      console.log(validated);
      // await this.updateinput(value, validate);
      //other logic not relevant to the issue
    },
    isValid(invalid, validated) {
      console.log(invalid);
      console.log(validated);
      // await this.updateinput(value, validate);
      //other logic not relevant to the issue
    },
  },
};
</script>
