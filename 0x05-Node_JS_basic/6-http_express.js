const express = require('express');

const app = express();
const SERVER_PORT = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});

module.exports = app;
