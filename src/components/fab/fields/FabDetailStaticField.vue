<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    class="d-flex justify-space-between"
  >
    <span class="font-weight-black">{{ $t(label) }}</span
    ><span class="text-right">{{ value }}</span>
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
  },
};
</script>
