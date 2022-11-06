<template>
  <div
    v-shortkey="['ctrl', '/']"
    class="d-flex flex-grow-1"
    @shortkey="onKeyup"
  >
    <!-- Navigation -->
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      floating
      class="elevation-1"
      :right="$vuetify.rtl"
      :light="menuTheme === 'light'"
      :dark="menuTheme === 'dark'"
    >
      <!-- Navigation menu -->
      <main-menu :menu="navigation.menu" />
      <!-- Navigation menu footer -->
      <!-- Footer navigation links -->
      <!-- <template v-slot:append>
        <div class="pa-1 text-center">
          <v-btn
            v-for="(item, index) in navigation.footer"
            :key="index"
            :href="item.href"
            :target="item.target"
            small
            text
          >
            {{ item.key ? $t(item.key) : item.text }}
          </v-btn>
        </div>
      </template> -->
    </v-navigation-drawer>

    <!-- Toolbar -->
    <v-app-bar
      app
      clipped-left
      :color="isToolbarDetached ? 'surface' : undefined"
      :flat="isToolbarDetached"
      :light="toolbarTheme === 'light'"
      :dark="toolbarTheme === 'dark'"
    >
      <v-card
        class="flex-grow-1 d-flex"
        :class="[isToolbarDetached ? 'pa-1 mt-3 mx-1' : 'pa-0 ma-0']"
        :flat="!isToolbarDetached"
      >
        <div class="d-flex flex-grow-1 align-center">
          <div class="d-flex flex-grow-1 align-center">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title class="mx-1 hidden-xs-only">
              <!-- <router-link
                :to="{ name: 'home' }"
                style="text-decoration: none; color: inherit"
              >
                <div
                  class="d-flex flex-grow-1 flex-row sidebar-sub-menu align-stretch"
                >
                  <div
                    class="title font-weight-bold text-uppercase primary--text mx-1 d-sm-none d-md-flex"
                  >
                    {{ $t(module.name) }}
                  </div>
                </div>
              </router-link> -->
              <!-- <img :src="require('@/assets/images/logo.png')" height="36" /> -->
            </v-toolbar-title>

            <v-spacer class="d-none d-lg-block"></v-spacer>

            <v-spacer class="mx-1 hidden-xs-only"></v-spacer>
            <v-spacer class="d-block d-sm-none"></v-spacer>
            <!--
            <toolbar-language />
            <toolbar-organizacao-militar /> -->

            <!-- <div :class="[$vuetify.rtl ? 'ml-1' : 'mr-1']">
              <toolbar-notifications />
            </div> -->

            <!-- <span class="mr-1 d-none d-sm-flex">{{ userName }} </span> -->

            <v-spacer class="d-block d-sm-none"></v-spacer>

            <!-- <div class="mr-1 d-none d-sm-flex">
              <toolbar-user />
            </div> -->
          </div>
        </div>
      </v-card>
    </v-app-bar>

    <fab-message />

    <v-main>
      <v-container :fluid="!isContentBoxed">
        <common />

        <v-layout>
          <slot></slot>
        </v-layout>
      </v-container>

      <v-footer app inset>
        <v-spacer></v-spacer>
        <div class="overline">
          {{
            $t('footer.text', {
              sessao: this.$t(module.section),
              aplicacao: this.$t(module.name),
              versao: module.version,
            })
          }}
        </div>
      </v-footer>
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

// navigation menu configurations
import config from '../configs';

import MainMenu from '../components/navigation/MainMenu';
import ToolbarUser from '../components/toolbar/ToolbarUser';
//import ToolbarApps from '../components/toolbar/ToolbarApps'
import ToolbarLanguage from '../components/toolbar/ToolbarLanguage';
import ToolbarNotifications from '../components/toolbar/ToolbarNotifications';
import ToolbarOrganizacaoMilitar from '../components/toolbar/ToolbarOrganizacaoMilitar.vue';
import Common from './Common.vue';
import FabMessage from '@/components/fab/message/FabMessage.vue';

export default {
  components: {
    MainMenu,
    // eslint-disable-next-line vue/no-unused-components
    ToolbarUser,
    // eslint-disable-next-line vue/no-unused-components
    ToolbarLanguage,
    // eslint-disable-next-line vue/no-unused-components
    ToolbarNotifications,
    // eslint-disable-next-line vue/no-unused-components
    ToolbarOrganizacaoMilitar,
    Common,
    FabMessage,
  },
  data() {
    return {
      drawer: null,
      showSearch: false,

      navigation: config.navigation,
    };
  },
  computed: {
    ...mapState('configs', [
      'module',
      'isContentBoxed',
      'menuTheme',
      'toolbarTheme',
      'isToolbarDetached',
    ]),
    userName() {
      return localStorage.getItem('user-name');
    },
    sgOrg() {
      return localStorage.getItem('sgorg-name');
    },
  },
  methods: {
    onKeyup() {
      this.$refs.search.focus();
    },
  },
};
</script>

<style scoped>
.buy-button {
  box-shadow: 1px 1px 18px #ee44aa;
}
</style>
