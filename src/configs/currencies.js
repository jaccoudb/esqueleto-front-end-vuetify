export default {
  // current currency
  currency: {
    label: 'BRL',
    decimalDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    currencySymbol: 'R$',
    currencySymbolNumberOfSpaces: 1,
    currencySymbolPosition: 'left',
  },

  // availabled currencies for user selection
  availableCurrencies: [
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
