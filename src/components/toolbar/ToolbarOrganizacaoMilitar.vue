<template>
  <div style="width: 150px">
    <v-autocomplete
      v-model="select"
      :items="unidades"
      item-text="text"
      item-value="value"
      :search-input.sync="search"
      cache-items
      class="mx-1"
      flat
      dense
      auto-select-first
      hide-no-data
      hide-details
      :label="$t('organizacaoMilitar.select')"
      solo-inverted
      append-icon="mdi-domain"
      @change="selected()"
    ></v-autocomplete>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      search: null,
    };
  },
  computed: {
    ...mapState('organizacaoMilitar', ['unidades', 'unidade']),
    select: {
      get() {
        return this.unidade;
      },
      set(value) {
        this.selectUnidade(value);
      },
    },
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;

      setTimeout(() => {
        this.items = this.unidades.filter((e) => {
          return (
            (e.text || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          );
        });
        this.loading = false;
      }, 500);
    },
    selected() {
      this.$router.push('/', () => {});
    },
    ...mapActions('organizacaoMilitar', ['selectUnidade']),
  },
};
</script>
