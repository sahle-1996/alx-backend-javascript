import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    this._validateFloors(floors);
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Setter for floors with validation
  set floors(value) {
    this._validateFloors(value);
    this._floors = value;
  }

  // Method to validate floors
  _validateFloors(value) {
    if (typeof value !== 'number' || !Number.isInteger(value)) {
      throw new TypeError('Floors must be an integer number');
    }
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate cautiously the ${this._floors} floors`;
  }
}
