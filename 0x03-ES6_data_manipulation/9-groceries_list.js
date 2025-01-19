/**
 * Creates a map of grocery items and their quantities.
 * @returns {Map<string, Number>}
 */
export default function groceriesList() {
  const groceryItems = new Map();
  groceryItems.set('Apples', 10);
  groceryItems.set('Tomatoes', 10);
  groceryItems.set('Pasta', 1);
  groceryItems.set('Rice', 1);
  groceryItems.set('Banana', 5);
  return groceryItems;
}
