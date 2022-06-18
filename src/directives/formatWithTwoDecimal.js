import Vue from 'vue';

Vue.directive('formatWithTwoDecimal', {
  // https://forum.vuejs.org/t/vue-directive-to-restrict-input-to-2-decimal-places/115788
  bind: function (el) {
    el.addEventListener('keypress', (e) => {
      // evolved from https://stackoverflow.com/a/52685887/9614402
      const keyCode = e.keyCode ? e.keyCode : e.which;
      const value = e.target.value;
      const i = value.indexOf('.');

      if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || i != -1)) {
        // 46 is dot
        // only allow numbers and one dot
        e.preventDefault();
      } else if (
        e.target.selectionStart == e.target.selectionEnd &&
        (i == -1 || e.target.selectionEnd > i) &&
        value.split('.')[1]?.length > 1
      ) {
        // restrict to 2 decimal places
        e.preventDefault();
      }
    });
    el.addEventListener('focusout', (e) => {
      e.target.value = (Number(e.target.value) || 0).toFixed(2);
    });
    // modify the initial value if it's not 2dp
    const inputElement =
      el.nodeName == 'INPUT' ? el : el.querySelector('input');
    const newValue = (Number(inputElement.value) || 0).toFixed(2);
    if (inputElement.value != newValue) {
      inputElement.value = newValue;
      inputElement.dispatchEvent(new Event('input'));
    }
  },
});
