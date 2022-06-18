<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg">
    <v-text-field
      outlined
      dense
      :disabled="!value"
      readonly
      :label="$t(label)"
      :value="value"
      :append-outer-icon="showCopyText ? 'mdi-content-copy' : ''"
      @click:append-outer="copyText({ value, label })"
      @click="copyTextOnClick ? copyText({ value, label }) : ''"
    ></v-text-field>
  </v-col>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
    cols: {
      type: Number,
      default: 12,
    },
    sm: {
      type: Number,
      default: 6,
    },
    md: {
      type: Number,
      default: 4,
    },
    lg: {
      type: Number,
      default: 3,
    },
    showCopyText: {
      type: Boolean,
      default: false,
    },
    copyTextOnClick: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    copyText(prop) {
      this.$clipboard(
        prop.value,
        this.$t('copyFieldText', { msg: this.$t(prop.label) })
      );
      this.timeout = setTimeout(() => {}, 2000);
    },
  },
};
</script>

<style scoped></style>
