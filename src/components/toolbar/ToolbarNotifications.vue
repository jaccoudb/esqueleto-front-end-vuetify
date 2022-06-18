<template>
  <v-menu
    offset-y
    left
    transition="slide-y-transition"
    :disabled="!notifications.length"
  >
    <template v-slot:activator="{ on }">
      <v-badge
        bordered
        :content="`${notifications.length !== 0 ? notifications.length : '0'}`"
        offset-x="22"
        offset-y="22"
      >
        <v-btn icon v-on="on">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-badge>
    </template>

    <!-- dropdown card -->
    <v-card>
      <v-list three-line dense max-width="400">
        <v-subheader class="pa-2 font-weight-bold">{{
          $t('notifications')
        }}</v-subheader>
        <div v-for="(item, index) in notifications" :key="index">
          <v-divider
            v-if="index > 0 && index < notifications.length"
            inset
          ></v-divider>
          <v-list-item>
            <v-list-item-avatar size="32" :color="item.color">
              <v-icon dark small>{{ item.icon }}</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="$t(item.title)"></v-list-item-title>
              <v-list-item-subtitle
                class="caption"
                v-text="$t(item.subtitle, item.subtitleParam)"
              ></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action class="align-self-center">
              <v-list-item-action-text>{{
                item.created | humanTImeFromNow()
              }}</v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </div>
      </v-list>

      <div class="text-center py-2">
        <v-btn depressed color="error" @click="clearMessages">
          {{ $t('clear') }}
        </v-btn>
      </div>
    </v-card>
  </v-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    value: { type: Boolean, default: true },
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
    ...mapState('configs', ['notifications']),
  },
  methods: {
    clearMessages() {
      this.CLEAR_NOTIFICATIONS();
      this.show = false;
    },
    ...mapMutations('configs', ['CLEAR_NOTIFICATIONS']),
  },
};
</script>
