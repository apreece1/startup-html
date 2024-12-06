const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');
const path = require('path');  // to handle file paths

const app = express();

// Create HTTP server and pass it to Socket.IO
const server = http.createServer(app);

// Set up Socket.IO
const io = new Server(server);

// Serve static files from the 'public' folder
app.use(express.static('public'));

// JSON parsing middleware
app.use(express.json());

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for messages from clients and broadcast them
  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    io.emit('message', msg); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// API route to fetch a daily motivational quote
app.get('/api/motivation', async (_req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    res.json(response.data[0]); // Return the first quote
  } catch (err) {
    res.status(500).send({ msg: 'Error fetching quote' });
  }
});

// The port for the service
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Start the server on the specified port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
