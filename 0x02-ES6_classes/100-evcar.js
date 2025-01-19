import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range; // Use underscore-prefixed private property
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const ParentClass = Car[Symbol.species]; // Reference the parent class
    return new ParentClass(); // Create a new instance of Car
  }
}
