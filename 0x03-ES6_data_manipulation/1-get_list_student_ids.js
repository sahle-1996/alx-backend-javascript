/**
 * Extracts the ids from a student list.
 * @param {Array<{id: number, firstName: string, location: string}>} students - Array of student objects.
 * @returns {number[]} An array of student ids, or an empty array if input is invalid.
 */
export default function getListStudentIds(students) {
  return Array.isArray(students) ? students.map((item) => item.id) : [];
}
