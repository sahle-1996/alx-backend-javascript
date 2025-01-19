/**
 * Creates a string from the set values that start with a specific prefix, 
 * removing the prefix from each of them and joining with a dash.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to remove from the beginning of each element in the set.
 * @returns {String} A string of modified set values, joined by dashes.
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  
  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
