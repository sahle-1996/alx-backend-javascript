const http = require('http');
const fs = require('fs');

const SERVER_PORT = 1245;
const SERVER_HOST = 'localhost';
const app = http.createServer();
const DATABASE_PATH = process.argv.length > 2 ? process.argv[2] : '';

const getStudentData = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const lines = content.toString('utf-8').trim().split('\n');
    const groups = {};
    const headers = lines[0].split(',');
    const studentFields = headers.slice(0, headers.length - 1);
    
    lines.slice(1).forEach((line) => {
      const parts = line.split(',');
      const field = parts.pop();
      const student = studentFields.reduce((obj, field, idx) => {
        obj[field] = parts[idx];
        return obj;
      }, {});
      if (!groups[field]) groups[field] = [];
      groups[field].push(student);
    });

    const totalCount = Object.values(groups).reduce((acc, students) => acc + students.length, 0);
    const report = [`Number of students: ${totalCount}`];
    Object.entries(groups).forEach(([field, students]) => {
      report.push(`Number of students in ${field}: ${students.length}. List: ${students.map(s => s.firstname).join(', ')}`);
    });
    resolve(report.join('\n'));
  });
});

const requestHandlers = [
  {
    route: '/',
    handler(_, res) {
      const message = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(message);
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseLines = ['This is the list of our students'];

      getStudentData(DATABASE_PATH)
        .then((data) => {
          responseLines.push(data);
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;
          res.end(responseLines.join('\n'));
        })
        .catch((err) => {
          responseLines.push(err.message || err.toString());
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 500;
          res.end(responseLines.join('\n'));
        });
    },
  },
];

app.on('request', (req, res) => {
  const handler = requestHandlers.find((h) => h.route === req.url);
  if (handler) handler.handler(req, res);
  else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`Server is listening on http://${SERVER_HOST}:${SERVER_PORT}`);
});

module.exports = app;
