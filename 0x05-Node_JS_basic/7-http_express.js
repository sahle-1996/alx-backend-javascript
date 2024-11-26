const express = require('express');
const fs = require('fs');

const app = express();
const SERVER_PORT = 1245;
const DB_FILE_PATH = process.argv[2] || '';

const getStudentReport = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Unable to load database'));
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      reject(new Error('Unable to load database'));
    }
    const report = [];
    const rows = data.toString('utf-8').trim().split('\n');
    const groups = {};
    const headers = rows[0].split(',');
    const attributes = headers.slice(0, -1);

    rows.slice(1).forEach((row) => {
      const cols = row.split(',');
      const studentData = cols.slice(0, -1);
      const field = cols[cols.length - 1];
      if (!groups[field]) groups[field] = [];
      const studentInfo = attributes.map((attr, idx) => [attr, studentData[idx]]);
      groups[field].push(Object.fromEntries(studentInfo));
    });

    const totalStudents = Object.values(groups).reduce(
      (sum, group) => sum + group.length,
      0
    );
    report.push(`Total number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(groups)) {
      report.push(`Students in ${field}: ${group.length}. Names: ${group.map(student => student.firstname).join(', ')}`);
    }
    resolve(report.join('\n'));
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const response = ['Here is the list of our students:'];

  getStudentReport(DB_FILE_PATH)
    .then((report) => {
      response.push(report);
      const content = response.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', content.length);
      res.status(200).send(content);
    })
    .catch((error) => {
      response.push(error.message || error.toString());
      const content = response.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', content.length);
      res.status(500).send(content);
    });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});

module.exports = app;
