/**
 * Converts an array into a unique Set.
 * @param {any[]} sourceArray - The input array to convert.
 * @returns {Set<any>} A Set containing unique elements from the input array.
 */
export default function setFromArray(sourceArray) {
  if (!Array.isArray(sourceArray)) {
    throw new TypeError('Argument must be an array');
  }
  return new Set([...sourceArray]);
}
