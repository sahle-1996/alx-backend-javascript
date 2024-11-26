const http = require('http');
const fs = require('fs');

const SERVER_PORT = 1245;
const SERVER_HOST = 'localhost';
const serverApp = http.createServer();
const databaseFile = process.argv[2] || '';

const getStudentData = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(filePath, (error, fileContent) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (fileContent) {
      const output = [];
      const lines = fileContent.toString().trim().split('\n');
      const studentsByField = {};
      const columns = lines[0].split(',');
      const headers = columns.slice(0, columns.length - 1);

      lines.slice(1).forEach((line) => {
        const fields = line.split(',');
        const values = fields.slice(0, fields.length - 1);
        const field = fields[fields.length - 1];
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        const studentObject = headers.reduce((obj, header, idx) => {
          obj[header] = values[idx];
          return obj;
        }, {});
        studentsByField[field].push(studentObject);
      });

      const totalStudentCount = Object.values(studentsByField).reduce(
        (sum, group) => sum + group.length, 0
      );
      output.push(`Number of students: ${totalStudentCount}`);
      Object.entries(studentsByField).forEach(([field, students]) => {
        output.push(`Number of students in ${field}: ${students.length}. List: ${students.map(s => s.firstname).join(', ')}`);
      });
      resolve(output.join('\n'));
    }
  });
});

const routeHandlers = [
  {
    path: '/',
    handleRequest(_, res) {
      const responseMessage = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseMessage.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseMessage));
    },
  },
  {
    path: '/students',
    handleRequest(_, res) {
      const header = 'This is the list of our students:';
      const responseMessages = [header];

      getStudentData(databaseFile)
        .then((data) => {
          responseMessages.push(data);
          const fullResponse = responseMessages.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', fullResponse.length);
          res.statusCode = 200;
          res.write(Buffer.from(fullResponse));
        })
        .catch((error) => {
          responseMessages.push(error instanceof Error ? error.message : String(error));
          const errorResponse = responseMessages.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', errorResponse.length);
          res.statusCode = 200;
          res.write(Buffer.from(errorResponse));
        });
    },
  },
];

serverApp.on('request', (req, res) => {
  routeHandlers.forEach((handler) => {
    if (req.url === handler.path) {
      handler.handleRequest(req, res);
    }
  });
});

serverApp.listen(SERVER_PORT, SERVER_HOST, () => {
  process.stdout.write(`Server is running at -> http://${SERVER_HOST}:${SERVER_PORT}\n`);
});

module.exports = serverApp;
