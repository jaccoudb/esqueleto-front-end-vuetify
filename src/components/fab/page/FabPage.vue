<template>
  <div class="d-flex flex-column flex-grow-1">
    <template>
      <fab-header
        v-if="title || breadcrumbsMenu"
        :title="title"
        :breadcrumbs-menu="breadcrumbsMenu"
        :title-parans="titleParans"
      />

      <v-card v-if="withCard" class="mt-2 pa-2">
        <slot />
      </v-card>
      <div v-else>
        <slot />
      </div>
    </template>
  </div>
</template>

<script>
import FabHeader from '../header/FabHeader.vue';

export default {
  components: {
    FabHeader,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    titleParans: {
      type: Object,
      default: null,
    },
    breadcrumbsMenu: {
      type: Array,
      default: null,
    },
    withCard: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
