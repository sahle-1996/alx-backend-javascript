const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers for integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and sum when one number is a float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round both numbers correctly before summing', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should handle mixed signs', () => {
    assert.strictEqual(calculateNumber(-1.5, 3.7), 3);
  });
});
