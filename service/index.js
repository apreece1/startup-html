// const express = require('express');
// const axios = require('axios'); // Import axios
// const app = express();

// // The service port
// const port = process.argv.length > 2 ? process.argv[2] : 4000;

// // JSON body parsing middleware
// app.use(express.json());

// // Serve static content (frontend)
// app.use(express.static('public'));

// // Router for service endpoints
// const apiRouter = express.Router();
// app.use('/api', apiRouter);

// // API to fetch motivational quote from a different API
// apiRouter.get('/quote', async (_req, res) => {
//   try {
//     // Replace with the correct API URL
//     const response = await axios.get('https://zenquotes.io/api/random'); // Example API

//     // Check if the response contains data and send it to the client
//     if (response.data && response.data.quote && response.data.author) {
//       const quote = response.data.quote;  // Adjust based on the API response structure
//       const author = response.data.author;
//       res.send({ quote, author });  // Send quote and author to the frontend
//     } else {
//       throw new Error('No data returned from the quotes API');
//     }
//   } catch (error) {
//     console.error('Error fetching quote from the API:', error.message);
//     res.status(500).send({ msg: 'Failed to fetch quote', error: error.message });
//   }
// });

// // Default route to serve the frontend if the path is unknown
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

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
    // Fetch a quote from ZenQuotes API
    const response = await axios.get('https://zenquotes.io/api/random');

    // Check if the response contains data and send it to the client
    if (response.data && response.data.length > 0) {
      const quote = response.data[0].q;  // ZenQuotes returns an array of quotes
      const author = response.data[0].a; // Get the author of the quote
      res.send({ quote, author });  // Send quote and author to the frontend
    } else {
      throw new Error('No data returned from the API');
    }
  } catch (error) {
    console.error('Error fetching quote from ZenQuotes:', error.message);
    res.status(500).send({ msg: 'Failed to fetch quote', error: error.message });
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
