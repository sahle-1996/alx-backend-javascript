export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Underscore attributes for storage
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  static get [Symbol.species]() {
    return this; // Ensures cloning uses the same class
  }

  cloneCar() {
    const CarClass = this.constructor[Symbol.species];
    return new CarClass(this._brand, this._motor, this._color); // Include original attributes in clone
  }
}
