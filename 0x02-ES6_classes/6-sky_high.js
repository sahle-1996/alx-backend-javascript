import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Setter for floors
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  // Overridden method
  evacuationWarningMessage() {
    return `Please evacuate all ${this._floors} floors safely and calmly.`;
  }
}
