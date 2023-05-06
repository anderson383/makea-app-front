export const numberFormat = (value:number) =>
  new Intl.NumberFormat('en-CO', {
    style: 'currency',
    currency: 'COP',
    compactDisplay: "short"
  }).format(value).slice(0, -3).replace('COP', '$');