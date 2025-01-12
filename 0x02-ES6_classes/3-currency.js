export default class Currency {
  constructor(code, name) {
    this._validateCode(code);
    this._validateName(name);

    this._code = code;
    this._name = name;
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._validateCode(value);
    this._code = value;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._validateName(value);
    this._name = value;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  // Validation methods
  _validateCode(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }

  _validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }
}
