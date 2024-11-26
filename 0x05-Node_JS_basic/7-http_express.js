const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const fetchStudentData = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const reportParts = [];
    const lines = data.toString('utf-8').split('\n').filter(line => line.trim() !== '');
    const categories = {};
    const headers = lines[0].split(',');
    const attributes = headers.slice(0, headers.length - 1);

    for (const line of lines.slice(1)) {
      const student = line.split(',');
      const studentDetails = student.slice(0, student.length - 1);
      const group = student[student.length - 1];
      if (!categories[group]) {
        categories[group] = [];
      }
      const studentInfo = attributes.map((attribute, idx) => [attribute, studentDetails[idx]]);
      categories[group].push(Object.fromEntries(studentInfo));
    }

    const totalStudents = Object.values(categories).reduce((acc, group) => acc + group.length, 0);
    reportParts.push(`Number of students: ${totalStudents}`);
    Object.entries(categories).forEach(([group, students]) => {
      reportParts.push(`Number of students in ${group}: ${students.length}. List: ${students.map(s => s.firstname).join(', ')}`);
    });
    resolve(reportParts.join('\n'));
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  fetchStudentData(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.status(200).send(responseText);
    })
    .catch((err) => {
      responseParts.push(err.message);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.status(200).send(responseText);
    });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
