<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template v-slot:activator="{ on }">
      <v-btn text :icon="$vuetify.breakpoint.smAndDown" v-on="on">
        <flag-icon
          :round="$vuetify.breakpoint.smAndDown"
          :flag="currentLocale.flag"
        ></flag-icon>
        <span
          v-show="$vuetify.breakpoint.mdAndUp && showLabel"
          :class="[$vuetify.rtl ? 'mr-1' : 'ml-1']"
          >{{ currentLocale.label }}</span
        >
        <v-icon v-if="showArrow" right>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list dense nav>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="setLocale(locale.code)"
      >
        <flag-icon
          :class="[$vuetify.rtl ? 'ml-1' : 'mr-1']"
          :flag="locale.flag"
        ></flag-icon>
        <v-list-item-title>{{ locale.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import FlagIcon from '../common/FlagIcon';
import { mapMutations, mapState } from 'vuex';
import moment from 'moment';

/*
|---------------------------------------------------------------------
| Language Switcher Component
|---------------------------------------------------------------------
|
| Locale menu to choose the language based on the locales present in
| vue-i18n locales available array
|
*/
export default {
  components: {
    FlagIcon,
  },
  props: {
    // Show dropdown arrow
    showArrow: {
      type: Boolean,
      default: false,
    },
    // Show the country label
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currencies: [
        {
          label: 'USD',
          decimalDigits: 2,
          decimalSeparator: '.',
          thousandsSeparator: ',',
          currencySymbol: '$',
          currencySymbolNumberOfSpaces: 0,
          currencySymbolPosition: 'left',
        },
        {
          label: 'EUR',
          decimalDigits: 2,
          decimalSeparator: '.',
          thousandsSeparator: ',',
          currencySymbol: '€',
          currencySymbolNumberOfSpaces: 1,
          currencySymbolPosition: 'right',
        },
        {
          label: 'BRL',
          decimalDigits: 2,
          decimalSeparator: ',',
          thousandsSeparator: '.',
          currencySymbol: 'R$',
          currencySymbolNumberOfSpaces: 1,
          currencySymbolPosition: 'left',
        },
      ],
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.find((i) => i.code === this.lang);
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
    ...mapState('configs', ['currency', 'lang']),
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$vuetify.lang.current = locale;
      const brl = this.currencies.find((item) => item.label === 'BRL');
      const usd = this.currencies.find((item) => item.label === 'USD');

      if (locale === 'pt') {
        this.setCurrency(brl);
      } else {
        this.setCurrency(usd);
      }

      // example on how certain languages can be RTL
      if (locale === 'ar') {
        this.$vuetify.rtl = true;
      } else {
        this.$vuetify.rtl = false;
      }

      moment.locale(locale);

      this.setLanguage(locale);
    },
    ...mapMutations('configs', ['setCurrency', 'setLanguage']),
  },
};
</script>
