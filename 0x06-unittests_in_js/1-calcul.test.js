const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber Function Tests', () => {
  describe('Operation: SUM', () => {
    it('should return the sum of two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
    });

    it('should return the sum of two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, -2.4), -4);
    });

    it('should return the sum of a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, -3.8), -2);
    });

    it('should handle summing zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 2.9), 3);
    });
  });

  describe('Operation: SUBTRACT', () => {
    it('should return the difference between two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.8, 2.1), 4);
    });

    it('should return the difference between two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
    });

    it('should return the difference when subtracting a negative from a positive', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, -3.5), 8);
    });

    it('should handle subtracting zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 1.2), -1);
    });
  });

  describe('Operation: DIVIDE', () => {
    it('should return the quotient of two positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.7, 3.1), 3);
    });

    it('should return the quotient of two negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.8, -2.3), 4);
    });

    it('should return the quotient when dividing a positive by a negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, -2.4), -4);
    });

    it('should handle division by zero and return "Error"', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.0), 'Error');
    });

    it('should handle numbers rounded to zero and return "Error"', () => {
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

  describe('Edge Cases and Invalid Inputs', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 2, 3), /Invalid type/);
    });

    it('should handle floating point numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1 + 0.2, 0.1), 0.5);
    });
  });
});
