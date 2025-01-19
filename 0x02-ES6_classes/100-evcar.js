import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range; // Store the range in an underscore-prefixed property
  }

  get range() {
    return this._range; // Getter for range
  }

  set range(value) {
    this._range = value; // Setter for range
  }

  cloneCar() {
    const BaseCar = Car[Symbol.species]; // Access the species of the Car class
    return new BaseCar(); // Create a new instance of Car instead of EVCar
  }
}
