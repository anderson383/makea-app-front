export const numberFormat = (value:number) =>
  new Intl.NumberFormat('en-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(value);