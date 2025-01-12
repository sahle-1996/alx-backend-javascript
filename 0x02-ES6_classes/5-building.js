export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      const hasEvacuationMessage = this.evacuationWarningMessage instanceof Function;
      if (!hasEvacuationMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    this._validateSqft(sqft);
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Validation and setter for sqft
  set sqft(value) {
    this._validateSqft(value);
    this._sqft = value;
  }

  // Private method to validate sqft
  _validateSqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
  }
}
