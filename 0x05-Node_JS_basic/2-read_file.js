const fs = require('fs');

function countStudents(filePath) {
  const studentGroups = {};
  const fieldCounts = {};
  let totalStudents = 0;

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const rows = fileContent.split('\n');
    rows.forEach((row) => {
      if (row.trim()) {
        totalStudents += 1;
        const [name, , , field] = row.split(',');

        if (field) {
          if (!studentGroups[field]) studentGroups[field] = [];
          studentGroups[field].push(name);

          fieldCounts[field] = (fieldCounts[field] || 0) + 1;
        }
      }
    });

    console.log(`Number of students: ${totalStudents - 1}`);
    for (const [field, count] of Object.entries(fieldCounts)) {
      console.log(
        `Number of students in ${field}: ${count}. List: ${studentGroups[field].join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
