<template>
  <v-form>
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
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true,
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
