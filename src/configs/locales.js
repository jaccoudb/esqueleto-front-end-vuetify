import en from '../translations/en';
import pt from '../translations/pt';

const supported = ['en', 'pt'];
let locale = 'pt';

try {
  // get browser default language
  const { 0: browserLang } = navigator.language.split('-');

  if (supported.includes(browserLang)) locale = browserLang;
} catch (e) {
  console.log(e);
}

export default {
  // current locale
  locale,

  // when translation is not available fallback to that locale
  fallbackLocale: 'pt',

  // availabled locales for user selection
  availableLocales: [
    {
      code: 'en',
      flag: 'us',
      label: 'English',
      messages: en,
    },
    {
      code: 'pt',
      flag: 'br',
      label: 'Português',
      messages: pt,
    },
  ],
};
