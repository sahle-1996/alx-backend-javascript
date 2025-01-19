/**
 * Updates the quantity of items in the map where the quantity is 1.
 * @param {Map<string, number>} map - A map of grocery items and their quantities.
 */
export default function updateUniqueItems(map) {
  if (Object.prototype.toString.call(map) !== '[object Map]') {
    throw new Error('Cannot process');
  }
  
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
