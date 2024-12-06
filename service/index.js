const express = require('express');
const fetch = require('node-fetch'); // Ensure fetch is available for API requests
const app = express();

// The service port
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing middleware
app.use(express.json());

// Serve static content (frontend)
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use('/api', apiRouter);

// API to fetch motivational quote
apiRouter.get('/quote', async (_req, res) => {
  try {
    // Fetch quote from external API
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send({ msg: 'Failed to fetch quote' });
  }
});

// Default route to serve the frontend if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
