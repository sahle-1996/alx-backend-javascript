export default function processAPIResponse(promise) {
  return promise
    .then(() => ({ status: 200, message: 'success' }))
    .catch(() => new Error('Failed request'))
    .finally(() => console.log('API response received'));
}
