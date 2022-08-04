<template>
  <fab-page :title="title" :breadcrumbs-menu="menu" :withCard="true">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header @click.native="expansionPanel()">
          <v-flex xs3>
            <v-checkbox
              v-model="checkbox"
              :label="`Checkbox 1: ${checkbox.toString()}`"
              @click.native="check($event)"
            ></v-checkbox>
          </v-flex>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </fab-page>
</template>

<script>
import FabPage from '@/components/fab/page/FabPage.vue';

export default {
  components: {
    FabPage,
  },
  data() {
    return {
      title: 'test.list',
      menu: [
        { to: '/', text: 'home', disabled: false },
        { to: '/test', text: 'test.list', disabled: true },
      ],
      showConfirmDialog: false,
      detail: '',
      checkbox: true,
      radioGroup: 1,
      switch1: true,
    };
  },
  methods: {
    check: function (e) {
      e.cancelBubble = true;
      console.log('checkbox checked');
    },
    expansionPanel: function () {
      console.log('expansion panel');
    },
  },
};
</script>
