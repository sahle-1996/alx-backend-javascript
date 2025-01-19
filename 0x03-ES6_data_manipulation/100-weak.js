/**
 * A weak map to track the number of calls for each endpoint.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of API calls allowed for each endpoint.
 */
const MAX_CALLS = 5;

/**
 * Tracks and updates the call count for a given API endpoint.
 * @param {{ protocol: String, name: String }} endpoint - The API endpoint to track.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, { count: 0 });
  }
  const currentCount = weakMap.get(endpoint).count;
  weakMap.set(endpoint, { count: currentCount + 1 });

  if (weakMap.get(endpoint).count >= MAX_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
