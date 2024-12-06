const express = require('express');
const app = express();

// The service port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Quote API: Fetch a random quote from an external source
apiRouter.get('/quote', async (_req, res) => {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const quotes = await response.json();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote.text });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send({ msg: 'Failed to fetch quote' });
  }
});

// Default route to serve the frontend
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
