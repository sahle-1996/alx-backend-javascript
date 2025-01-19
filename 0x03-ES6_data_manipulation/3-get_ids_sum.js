/**
 * Calculates the total of student ids.
 * @param {Array<{id: number, firstName: string, location: string}>} students - Array of student objects.
 * @returns {number} Sum of all student ids, or 0 for invalid input.
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(
      (total, student) => total + student.id,
      0,
    );
  }
  return 0;
}
