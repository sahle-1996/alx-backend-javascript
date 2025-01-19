/**
 * Verifies if all elements in an array are present in a set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array whose elements are checked for existence in the set.
 * @returns {Boolean} True if all array elements are in the set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new TypeError('First argument must be a Set');
  }
  return array.reduce((result, item) => result && set.has(item), true);
}
