/**
 * Verifies if all elements of an array are present in a set.
 * @param {Set} set - The set of unique elements.
 * @param {Array} array - The array of items to check.
 * @returns {boolean} True if all elements are found in the set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  if (array.length === 0) return true;
  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      return false;
    }
  }
  return true;
}
