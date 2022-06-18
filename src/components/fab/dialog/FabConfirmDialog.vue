<template>
  <v-dialog v-model="show" persistent max-width="30em">
    <v-card>
      <v-toolbar dense>
        <v-btn icon v-if="icon">
          <v-icon>{{ icon }}</v-icon>
        </v-btn>

        <v-toolbar-title class="font-weight-black">
          {{ $t(title) }}</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-btn icon @click="show = false">
          <v-icon>mdi-close </v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-title class="text-h7">
        {{ $t(detail) }}
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed @click="show = false">
          {{ $t(nolabel) }}
        </v-btn>
        <v-btn depressed :color="yesColor" @click="confirmView">
          {{ $t(yeslabel) }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return { dialog: false };
  },
  props: {
    value: { type: Boolean, default: false },
    title: {
      type: String,
      default: 'confirm',
    },
    detail: {
      type: String,
    },
    yeslabel: {
      type: String,
      default: 'ok',
    },
    yesColor: {
      type: String,
      default: 'primary',
    },
    nolabel: {
      type: String,
      default: 'cancel',
    },
    icon: { type: String, default: '' },
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
    confirmView() {
      this.$emit('confirm');
    },
  },
};
</script>
