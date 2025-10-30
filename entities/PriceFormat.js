export class PriceFormat {
  constructor({ currency, delimiters }) {
    this.currency = currency;
    this.delimiters = {
      hundred: delimiters.hundred,
      thousand: delimiters.thousand,
    };
  }
}
