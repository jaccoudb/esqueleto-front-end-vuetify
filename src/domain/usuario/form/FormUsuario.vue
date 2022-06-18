<template>
  <validation-observer ref="form" v-slot="{ invalid }">
    <v-form>
      <v-row dense>
        <v-col cols="12" sm="6" md="3">
          <ValidationProvider
            name="sample.view.field1"
            vid="id"
            rules="required|max:2"
            v-slot="{ errors }"
          >
            <v-text-field
              v-model="fields.id"
              :label="$t('sample.view.field1')"
              outlined
              dense
              :error-messages="errors"
            ></v-text-field>
          </ValidationProvider>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <ValidationProvider
            name="sample.view.field2"
            vid="nome"
            rules="required|min:3"
            v-slot="{ errors }"
          >
            <v-text-field
              v-model="fields.nome"
              :label="$t('sample.view.field2')"
              outlined
              dense
              :error-messages="errors"
            ></v-text-field>
          </ValidationProvider>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <ValidationProvider
            name="sample.view.field3"
            vid="email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <v-text-field
              v-model="fields.email"
              :label="$t('sample.view.field3')"
              outlined
              dense
              :error-messages="errors"
            ></v-text-field>
          </ValidationProvider>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-menu
            v-model="menuDataNascimento"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <ValidationProvider
                name="sample.view.field4"
                vid="dataNascimento"
                rules="required"
                v-slot="{ errors }"
              >
                <v-text-field
                  outlined
                  dense
                  :value="formatDate(fields.dataNascimento)"
                  clearable
                  :label="$t('sample.view.field4')"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="date = null"
                  prepend-inner-icon="mdi-calendar"
                  :error-messages="errors"
                ></v-text-field>
              </ValidationProvider>
            </template>
            <v-date-picker
              v-model="fields.dataNascimento"
              @change="menuDataNascimento = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <ValidationProvider
            name="sample.view.field5"
            vid="filial"
            rules="required"
            v-slot="{ errors }"
          >
            <v-select
              :items="filiais"
              :label="$t('sample.view.field5')"
              clearable
              outlined
              dense
              v-model="fields.filial"
              item-text="text"
              item-value="value"
              :error-messages="errors"
            ></v-select>
          </ValidationProvider>
        </v-col>

        <v-col cols="12">
          <ValidationProvider
            name="sample.view.field9"
            vid="obs"
            rules=""
            v-slot="{ errors }"
          >
            <v-textarea
              dense
              rows="2"
              outlined
              name="obs"
              :label="$t('sample.view.field6')"
              :value="fields.obs"
              :error-messages="errors"
            ></v-textarea>
          </ValidationProvider>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-checkbox
            v-model="fields.active"
            :label="$t('sample.view.field7')"
          ></v-checkbox>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-radio-group v-model="fields.admin" row>
            <v-radio :label="$t('sim')" value="radio-1"></v-radio>
            <v-radio :label="$t('nao')" value="radio-2"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col>
          <v-switch
            v-model="fields.remote"
            :label="$t('sample.view.field8')"
          ></v-switch>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-slider hint="Im a hint" max="50" min="-50"></v-slider>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-btn @click="onDelete" color="error" class="mr-3">
          {{ $t('delete') }}
        </v-btn>

        <v-btn class="mr-3" @click="onReset">
          {{ $t('reset') }}
        </v-btn>

        <v-btn
          color="primary"
          class="mr-3"
          @click="onSubmit"
          :disabled="invalid"
        >
          {{ $t('save') }}
        </v-btn>
        <fab-message-dialog
          v-model="showDialogMessage"
          :title="title"
          :detail="detail"
        />
        <fab-confirm-dialog
          v-model="showConfirmDialog"
          title="warning"
          detail="confirm.delete"
          yeslabel="delete"
          yesColor="error"
          nolabel="cancel"
          icon="mdi-help"
          @confirm="confirmDelete()"
        />
      </v-row>
    </v-form>
  </validation-observer>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { ValidationObserver } from 'vee-validate';
import Usuario from '../type/Usuario';
import Notification from '@/type/notification';
import FabConfirmDialog from '@/components/fab/dialog/FabConfirmDialog.vue';
import FabMessageDialog from '@/components/fab/dialog/FabMessageDialog.vue';
import formatDateMixin from '@/mixins/formatDateMixin';

export default {
  components: {
    ValidationObserver,
    FabConfirmDialog,
    FabMessageDialog,
  },
  mixins: [formatDateMixin],
  data() {
    return {
      menuDataNascimento: false,
      fields: new Usuario(),
      file: undefined,
      id: this.$route.params.id,
      showDialogMessage: false,
      showConfirmDialog: false,
      Notification: new Notification(),
      title: this.$t('success'),
      detail: this.$t('saved'),
      filiais: [
        { value: '1', text: 'Centro' },
        { value: '2', text: 'Centro' },
        { value: '3', text: 'Ilha do Governador' },
        { value: '4', text: 'Irajá' },
        { value: '5', text: 'Vila da Penha' },
      ],
      cargos: [
        { value: '1', text: 'Vendedor' },
        { value: '2', text: 'Gerente' },
        { value: '3', text: 'Contador' },
        { value: '4', text: 'Serviços Gerais' },
        { value: '5', text: 'Administrador' },
      ],
      cidades: [
        { value: '3304557', text: 'Rio de Janeiro' },
        { value: '3303302', text: 'Niterói' },
        { value: '3550308', text: 'São Paulo' },
        { value: '3548500', text: 'Santos' },
      ],
    };
  },
  methods: {
    ...mapActions('usuario', ['update', 'remove', 'created', 'getById']),
    ...mapActions('configs', ['showToast', 'showSuccess', 'showError']),

    onSubmit() {
      if (!this.invalid) {
        this.detail = this.$t('usuario.updated', { msg: this.id });
        this.showDialogMessage = true;
        this.showSuccess(this.$t('sample.created'));
        this.PUSH_NOTIFICATION(new Notification('info', 'sample.created'));
        this.$router.push({
          name: 'list-usuario',
        });
      }
    },
    onDelete() {
      this.showConfirmDialog = true;
    },
    confirmDelete() {
      this.$refs.form.validate();
      if (!this.invalid) {
        this.PUSH_NOTIFICATION(
          new Notification('warning', 'sample.deleted', 'error', 'mdi-alert')
        );
        this.showError(this.$t('sample.deleted', { msg: this.id }));
        this.$router.push({ name: 'list-usuario' });
      }
      this.showConfirmDialog = false;
    },
    onReset() {
      this.fields = new Usuario(this.id);
    },
    ...mapMutations('configs', ['PUSH_NOTIFICATION']),
  },
  computed: {
    ...mapState(['errors', 'validators']),
  },
};
</script>
