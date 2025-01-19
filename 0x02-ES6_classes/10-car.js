export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Use underscore-prefixed private properties
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const CarClass = this.constructor[Symbol.species];
    return new CarClass(this._brand, this._motor, this._color);
  }
}
