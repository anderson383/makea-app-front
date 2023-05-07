/**
 * Return a currency-formatted string COP
 * @param {number} value A number to format
 */
export const numberFormatCurrency = (value:number) =>
  new Intl.NumberFormat('en-CO', {
    style: 'currency',
    currency: 'COP',
    compactDisplay: "short"
  }).format(value).slice(0, -3).replace('COP', '$');


  