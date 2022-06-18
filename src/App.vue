<template>
  <v-app>
    <default-layout v-if="isRouterLoaded">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.name" />
      </transition>
    </default-layout>
  </v-app>
</template>

<script>
import defaultLayout from './layouts/DefaultLayout';

export default {
  components: {
    defaultLayout,
  },
  computed: {
    isRouterLoaded: function () {
      if (this.$route.name !== null) return true;

      return false;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title =
          `${this.$t('project.name')} - ${this.$t(to.meta.title)}` ||
          this.$t('project.name');
      },
    },
  },
};
</script>

<style scoped>
/**
 * Transition animation between pages
 */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
