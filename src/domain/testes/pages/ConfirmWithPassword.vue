<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <v-dialog v-model="show" :max-width="size" :persistent="persistent">
      <v-card elevation="5" outlined shaped>
        <!-- Toolbar -->
        <v-toolbar dark dense class="blue darken-3">
          <v-toolbar-title class="flex text-center">
            <h3>'AUTORIZAÇÃO MEDIANTE USO DE SENHA PESSOAL'</h3>
          </v-toolbar-title>
        </v-toolbar>
        <!-- Card Principal -->
        <br />
        <v-card-text class="text-subtitle-1 text-wrap text-justify pb-0">
          Ao confirmar a ação será enviada uma solicitação de publicação do
          certame no Diário Oficial da União (DOU) e o certame estará disponível
          para ofertas e lances dos fornecedores. Digite a senha e clique em
          "Confirmar" para continuar a ação ou retorne a tela anterior clicando
          em "Cancelar"
          <!-- Senha -->
          <div class="pb-2"></div>
          <!-- Mensagem de error -->
          <v-alert dense outlined type="error" v-if="errors">
            Senha Incorreta. Digite Novamente!
          </v-alert>
          <form @submit.prevent="submit">
            <div class="text-body-2 flex text-center">
              Digite sua senha (123)
            </div>
            <validation-provider
              v-slot="{ errors }"
              name="fields.txConteudo"
              rules="required"
            >
              <v-text-field
                dense
                outlined
                v-model="password"
                :error-messages="errors"
                required
                label="Password"
                class="input-group--focused"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                @click:append="show3 = !show3"
              />
            </validation-provider>
          </form>
        </v-card-text>
        <!--  -->
        <v-card-actions>
          <!-- Botões de Ação -->
          <v-row align="center" justify="space-between" class="mx-3 my-3">
            <v-btn dark tile color="red darken-2" @click="cancel">
              {{ $t('cancel') }}
            </v-btn>
            <v-btn
              dark
              tile
              color="#009e0f"
              :readonly="invalid"
              @click="submit"
            >
              {{ $t('confirm.tag') }}
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
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
  data() {
    return {
      cadastro: false,
      password: '',
      show3: false,
      errors: false,
    };
  },
  methods: {
    cancel() {
      this.password = '';
      this.$refs.observer.reset();
      this.show = false;
    },
    submit() {
      if (this.password == 123) {
        this.$refs.observer.reset();
        this.errors = false;
        this.password = '';
        this.show = false;
      } else {
        this.$refs.observer.validate();
        this.errors = true;
        this.password = '';
      }
      console.log('teste');
    },
  },
  props: {
    persistent: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '40em',
    },
    value: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
