/**
 * Initializes a DataView with an Int8 value at a specific position.
 * @param {number} length - Length of the ArrayBuffer.
 * @param {number} position - Position to insert the value.
 * @param {number} value - The value to store in the specified position.
 * @returns {DataView} A DataView object with the specified value.
 * @throws {Error} If the position is outside the buffer's range.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
}
