/**
 * Initialize Express server
 */
import express from 'express';
import appRoutes from './routes/index';

const server = express();
const SERVER_PORT = 1245;

// Set up routing for the app
server.use('/', appRoutes);

// Start the server and listen on the specified port
server.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});

export default server;
