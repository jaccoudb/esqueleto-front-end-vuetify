<template>
  <div class="d-flex flex-grow-1 flex-row sidebar-sub-menu align-stretch">
    <v-navigation-drawer
      :height="$vuetify.breakpoint.mdAndUp ? 480 : '100%'"
      hide-overlay
      v-model="drawer"
      :app="$vuetify.breakpoint.smAndDown"
      :permanent="$vuetify.breakpoint.mdAndUp"
      class="my-1 elevation-1 rounded flex-shrink-0 border-gray-light"
      width="240"
      :mini-variant="mini"
    >
      <v-list dense nav class="v-list-item--active primary--text">
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            exact
            link
            @click="selectedActionNavMenu(item.component)"
          >
            <template name="active"> </template>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-btn
      ref="button"
      class="mx-0 drawer-mini-button"
      left
      fab
      color="primary"
      plain
      @click="toggleMini"
      x-small
      v-show="$vuetify.breakpoint.mdAndUp"
    >
      <v-icon v-if="mini">mdi-chevron-right </v-icon>
      <v-icon v-else>mdi-chevron-left </v-icon>
    </v-btn>

    <div class="d-flex flex-grow-1 flex-column">
      <v-btn
        ref="button"
        class="drawer-button"
        fab
        dark
        color="primary"
        @click="drawer = !drawer"
        v-show="$vuetify.breakpoint.smAndDown"
      >
        <v-icon>mdi-chevron-right </v-icon>
      </v-btn>
      <div class="sidebar-sub-menu-item">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'usuario.detail.detail1',
          icon: 'mdi-eye',
          component: 'Detail1',
        },
        {
          title: 'usuario.detail.detail2',
          icon: 'mdi-checkbox-marked-outline',
          component: 'Detail2',
        },
        {
          title: 'usuario.detail.detail3',
          icon: 'mdi-cash',
          component: 'Detail3',
        },
        {
          title: 'usuario.detail.detail4',
          icon: 'mdi-flash',
          component: 'Detail4',
        },
        {
          title: 'usuario.detail.detail5',
          icon: 'mdi-exclamation',
          component: 'Detail5',
        },
        {
          title: 'usuario.detail.detail6',
          icon: 'mdi-menu',
          component: 'Detail6',
        },
        {
          title: 'usuario.detail.historic',
          icon: 'mdi-message-outline',
          component: 'DetailHistoric',
        },
      ],
      right: null,
      drawer: this.$vuetify.breakpoint.mdAndUp ? true : false,
      mini: false,
    };
  },
  methods: {
    selectedActionNavMenu(component) {
      this.$emit('selectedActionNavMenu', component);
    },
    toggleNav() {
      this.drawer = !this.drawer;
      this.mini = false;
    },
    toggleMini() {
      this.mini = !this.mini;
      this.drawer = true;
    },
  },
  computed: {
    item: {
      get() {
        return this.items.findIndex((i) => i.component == this.activeComponent);
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  props: {
    activeComponent: {
      type: String,
      required: true,
    },
  },
  created() {
    this.mini = this.$vuetify.breakpoint.md ? true : false;
  },
};
</script>

<style lang="scss" scoped>
.drawer-button {
  position: fixed;
  top: 340px;
  left: -20px;
  z-index: 6;
  box-shadow: 1px 1px 18px var(--v-primary);
  width: 60px;

  .v-icon {
    margin-left: 10px;
    font-size: 1.3rem;
  }
}

.drawer-mini-button {
  margin: auto;
}
</style>
