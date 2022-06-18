import Vue from 'vue';
import store from '../store';

Vue.filter('formatPrices', (price, currency) => {
  currency = currency || store.state.configs.currency;

  try {
    const numberFormatted = numberFormat(
      price,
      currency.decimalDigits,
      currency.decimalSeparator,
      currency.thousandsSeparator
    );

    return numberFormatted;
  } catch (e) {
    return price;
  }
});

export function numberFormat(number, decimals, dec_point, thousands_sep) {
  if (isNaN(number)) {
    return number;
  }

  const negative = number < 0;

  if (negative) number = number * -1;

  const str = number
    .toFixed(decimals ? decimals : 0)
    .toString()
    .split('.');
  const parts = [];

  for (let i = str[0].length; i > 0; i -= 3) {
    parts.unshift(str[0].substring(Math.max(0, i - 3), i));
  }

  str[0] = parts.join(thousands_sep ? thousands_sep : ',');

  return (negative ? '-' : '') + str.join(dec_point ? dec_point : '.');
}

export default {
  numberFormat,
};
