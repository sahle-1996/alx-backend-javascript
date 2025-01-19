/**
 * Updates the grades of students in a specific city.
 * @param {Array<{id: number, firstName: string, location: string}>} students - List of students.
 * @param {string} city - The target city.
 * @param {Array<{studentId: number, grade: number}>} newGrades - Array of grade objects.
 * @returns {Array<{id: number, firstName: string, location: string, grade: string | number}>}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (Array.isArray(students)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
        return {
          ...student,
          grade: matchedGrade ? matchedGrade.grade : defaultGrade.grade,
        };
      });
  }
  return [];
}
