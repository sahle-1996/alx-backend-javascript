const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('type === "SUM"', function () {
    it('adds two equal positive numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('adds numbers rounding differently', function () {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('sums two equal negative numbers', function () {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('sums negative numbers rounding differently', function () {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('adds a negative and positive number', function () {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('adds a positive and negative number', function () {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('adds zero and zero', function () {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type === "SUBTRACT"', function () {
    it('subtracts two equal positive numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('subtracts numbers rounding differently', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('subtracts two equal negative numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('subtracts negative numbers rounding differently', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('subtracts a negative number from a positive number', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4);
    });

    it('subtracts a positive number from a negative number', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4);
    });

    it('subtracts zero from zero', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type === "DIVIDE"', function () {
    it('divides positive numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('divides numbers with differing signs', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('divides numbers with reversed signs', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('divides negative numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('divides two equal positive numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('divides two equal negative numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('divides rounded numbers up', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('divides rounded numbers down', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('divides zero by a positive number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('divides zero by a negative number', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('handles division by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('handles division by a small number rounded to zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('handles division by a small negative number rounded to zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('handles division of a negative number by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('handles division by a small number near zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('handles division by a small negative number near zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('divides zero by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
