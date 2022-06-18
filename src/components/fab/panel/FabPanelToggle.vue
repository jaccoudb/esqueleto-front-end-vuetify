<template>
  <div class="py-1">
    <v-expansion-panels v-model="panel">
      <v-expansion-panel class="border-gray-light">
        <v-expansion-panel-header>
          {{ $t(title) }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <slot></slot>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: 'FabPanelToggle',
  props: {
    title: {
      type: String,
      required: true,
    },
    filterOpened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      panel: this.filterOpened ? 0 : 1,
    };
  },
};
</script>

<style>
.v-expansion-panels {
  z-index: 0;
}
</style>
