/**
 * Updates the quantity of items with a quantity of 1 to 100 in the map.
 * @param {Map<String, number>} map - A map containing grocery items and their quantities.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
