const express = require('express');
const axios = require('axios'); // Import axios
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

// API to fetch motivational quote from ZenQuotes
apiRouter.get('/quote', async (_req, res) => {
  try {
    // Fetch quote from ZenQuotes API using axios
    const response = await axios.get('https://zenquotes.io/api/random');
    
    // Check if the response contains data and send it to the client
    if (response.data && response.data.length > 0) {
      const quote = response.data[0]; // ZenQuotes returns an array of quotes
      res.send({ quote: quote.q, author: quote.a });  // Send only quote and author
    } else {
      throw new Error('No data returned from API');
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send({ msg: 'Failed to fetch quote' }); // Send error message if something goes wrong
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
