/**
 * Updates student grades based on their city.
 * @param {Array<{id: number, firstName: string, location: string}>} students - List of students.
 * @param {string} city - Target city.
 * @param {Array<{studentId: number, grade: number}>} newGrades - Array of grade objects.
 * @returns {Array<{id: number, firstName: string, location: string, grade: string | number}>} Updated list of students.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const noGrade = { grade: 'N/A' };

  if (Array.isArray(students)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const gradeObj = newGrades.find((grade) => grade.studentId === student.id) || noGrade;
        return { ...student, grade: gradeObj.grade };
      });
  }
  return [];
}
