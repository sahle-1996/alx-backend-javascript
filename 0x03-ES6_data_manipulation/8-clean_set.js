/**
 * Concatenates parts of strings from a set that start with a specified prefix.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The prefix to remove from the beginning of each string.
 * @returns {String} A concatenated string of the remaining parts of matching strings, separated by a dash.
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  return [...set]
    .filter(item => typeof item === 'string' && item.startsWith(startString))
    .map(item => item.slice(startString.length))
    .join('-');
}
