#!/usr/bin/env node

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return the sum of two rounded positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 3.1), 6);
    });

    it('should return the sum of two rounded negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -3.8), -6);
    });

    it('should return the sum of a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 4.2, -3.7), 0);
    });

    it('should handle adding zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 2.9), 3);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return the difference of two rounded positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.8, 2.1), 4);
    });

    it('should return the difference of two rounded negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
    });

    it('should return the difference when subtracting a negative from a positive', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, -3.5), 8);
    });

    it('should handle subtracting zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 1.2), -1);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should return the quotient of two rounded positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.7, 3.1), 3);
    });

    it('should return the quotient of two rounded negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.8, -2.3), 4);
    });

    it('should return the quotient of a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, -2.4), -4);
    });

    it('should return "Error" for division by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.0), 'Error');
    });

    it('should return "Error" for division by a number rounded to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.7, 0.4), 'Error');
    });

    it('should handle zero divided by a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 3.9), 0);
    });

    it('should handle zero divided by a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -2.8), 0);
    });

    it('should return "Error" for dividing zero by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 2, 3), /Invalid operation type/);
    });
  });
});
