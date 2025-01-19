/**
 * Calculates the total of student ids.
 * @param {Array<{id: number, firstName: string, location: string}>} students - List of students.
 * @returns {number} Sum of all student ids.
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
