#!/usr/bin/env node

/**
 * Function that performs SUM, SUBTRACT, or DIVIDE operations
 * with rounded numbers.
 * @param {string} type - The operation type (SUM, SUBTRACT, DIVIDE).
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the operation or 'Error' for division by zero.
 */
const calculateNumber = (type, a, b) => {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type === 'SUM') {
    return roundedA + roundedB;
  }
  if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  }
  if (type === 'DIVIDE') {
    return roundedB === 0 ? 'Error' : roundedA / roundedB;
  }
  throw new Error('Invalid operation type');
};

module.exports = calculateNumber;
