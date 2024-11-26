const fs = require('fs');

function countStudents(filePath) {
  const studentList = {};
  const fieldCount = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = content.split('\n');
        rows.forEach((row) => {
          if (row.trim()) {
            totalStudents += 1;
            const [name, , , field] = row.split(',');
            if (!studentList[field]) studentList[field] = [];
            studentList[field].push(name);

            fieldCount[field] = (fieldCount[field] || 0) + 1;
          }
        });

        console.log(`Number of students: ${totalStudents - 1}`);
        Object.entries(fieldCount).forEach(([field, count]) => {
          console.log(`Number of students in ${field}: ${count}. List: ${studentList[field].join(', ')}`);
        });
        resolve(content);
      }
    });
  });
}

module.exports = countStudents;
