/**
 * A WeakMap to track the number of calls to an endpoint.
 */
export const weakMap = new WeakMap();

/**
 * The threshold for the maximum number of allowed calls per endpoint.
 */
const MAX_CALLS = 5;

/**
 * Tracks the number of calls made to a specific endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to track.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const currentCalls = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCalls + 1);

  if (currentCalls + 1 >= MAX_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
