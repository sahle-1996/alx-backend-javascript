/**
 * Extracts the ids from a list of students.
 * @param {Array<{id: number, firstName: string, location: string}>} students - The student list.
 * @returns {number[]} Array of student ids or an empty array if input is invalid.
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
