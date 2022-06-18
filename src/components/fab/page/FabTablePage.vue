<template>
  <div class="d-flex flex-column flex-grow-1">
    <template>
      <fab-header
        v-if="title || breadcrumbsMenu"
        :title="title"
        :breadcrumbs-menu="breadcrumbsMenu"
        :title-parans="titleParans"
      />

      <div v-if="$slots.filter">
        <fab-panel-toggle :title="filterTitle" :filter-opened="filterOpened">
          <slot v-if="$slots.filter" name="filter" />
        </fab-panel-toggle>
      </div>

      <div v-if="$slots.actionsButtons" class="d-md-flex justify-end pb-1">
        <slot name="actionsButtons" />
      </div>

      <slot />
    </template>
  </div>
</template>

<script>
import FabHeader from '../header/FabHeader.vue';
import FabPanelToggle from '../panel/FabPanelToggle.vue';
export default {
  components: {
    FabHeader,
    FabPanelToggle,
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
      default: true,
    },
    filterTitle: {
      type: String,
      default: 'filters',
    },
    filterOpened: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
