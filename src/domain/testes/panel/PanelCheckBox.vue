<template>
  <v-form>
    <v-checkbox
      v-for="(el, index) in checkboxes"
      :key="index"
      v-model="checkbox[index]"
      :value="el"
      :label="`Checkbox ${index}`"
      @change="onChange($event, index)"
    ></v-checkbox>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      checkboxes: ['Opt 1', 'Opt 2', 'Opt 3', 'Opt 4'],
      checkbox: [],
    };
  },
  methods: {
    onChange(val, i) {
      console.log(val, i, this.checkbox);
      if (val === null || val.length === 0) {
        // Custom checks in this
        console.log('Unchecked');
      } else {
        console.log('Checked');
      }
    },
  },
  onCheckboxClicked: function (e) {
    console.log('onCheckboxClicked: ' + e.target.checked);
  },
};
</script>
