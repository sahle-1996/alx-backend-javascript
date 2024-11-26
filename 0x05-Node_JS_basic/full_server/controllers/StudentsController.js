/**
 * Controller for handling student-related routes
 */
import fetchDatabase from '../utils';

class StudentsController {
  static async listAllStudents(req, res) {
    try {
      const filePath = process.argv[2] || '';
      const data = await fetchDatabase(filePath);
      const categories = Object.keys(data).sort((a, b) => a.localeCompare(b));
      
      res.status(200).write('This is the list of our students\n');
      categories.forEach((category) => {
        res.write(`Number of students in ${category}: ${data[category].length}. List: ${data[category].join(', ')}`);
        if (category !== categories[categories.length - 1]) res.write('\n');
      });
    } catch (error) {
      res.status(500).write(error.message);
    }
    res.end();
  }

  static async listStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major.toUpperCase())) {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      const filePath = process.argv[2] || '';
      try {
        const data = await fetchDatabase(filePath);
        res.status(200).write(`List: ${data[major.toUpperCase()].join(', ')}`);
      } catch (error) {
        res.status(500).write(error.message);
      }
      res.end();
    }
  }
}

export default StudentsController;
