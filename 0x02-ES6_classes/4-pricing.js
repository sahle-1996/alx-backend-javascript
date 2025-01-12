import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._validateAmount(amount);
    this._validateCurrency(currency);

    this._amount = amount;
    this._currency = currency;
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._validateAmount(value);
    this._amount = value;
  }

  // Getter and Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._validateCurrency(value);
    this._currency = value;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }

  // Private validation methods
  _validateAmount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
  }

  _validateCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }
}
