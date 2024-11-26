const http = require('http');
const { readFile } = require('fs');

const hostname = 'localhost';
const port = 1245;

function countStudents(filePath) {
  const studentsByField = {};
  let totalStudents = 0;
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, content) => {
      if (err) {
        reject('Cannot load the database');
      } else {
        let output = '';
        const lines = content.toString().split('\n');
        for (const line of lines) {
          if (line.trim()) {
            totalStudents++;
            const fields = line.split(',');
            const field = fields[3];
            if (!studentsByField[field]) studentsByField[field] = [];
            studentsByField[field].push(fields[0]);
          }
        }
        output += `Number of students: ${totalStudents - 1}\n`;
        for (const field in studentsByField) {
          output += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
        }
        resolve(output.trim());
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then(data => {
      res.end(data);
    }).catch(error => {
      res.statusCode = 404;
      res.end(error);
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
