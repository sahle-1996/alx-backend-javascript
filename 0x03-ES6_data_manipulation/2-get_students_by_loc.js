/**
 * Finds students based on their location.
 * @param {Array<{id: number, firstName: string, location: string}>} students - List of students.
 * @param {string} city - Target city for filtering.
 * @returns {Array<{id: number, firstName: string, location: string}>} Filtered list of students.
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
