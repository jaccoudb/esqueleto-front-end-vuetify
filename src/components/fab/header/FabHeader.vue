<template>
  <div>
    <div class="d-md-flex mb-1">
      <div class="display-1">{{ $t(title, titleParans) }}</div>
      <v-breadcrumbs
        :items="breadcrumbsMenu"
        divider="-"
        class="pa-1 py-1 ml-auto"
      >
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            :href="item.href"
            :disabled="item.disabled"
            :to="item.to"
            :exact="true"
          >
            {{ $t(item.text, item.textParans) }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'page',
    },
    titleParans: {
      type: Object,
      default: null,
    },
    breadcrumbsMenu: {
      type: Array,
      default: null,
    },
  },
};
</script>
