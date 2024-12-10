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

// // API to fetch motivational quote from ZenQuotes
// apiRouter.get('/quote', async (_req, res) => {
//   try {
//     // Fetch quote from ZenQuotes API using axios
//     const response = await axios.get('https://zenquotes.io/api/random');
    
//     // Check if the response contains data and send it to the client
//     if (response.data && response.data.length > 0) {
//       const quote = response.data[0]; // ZenQuotes returns an array of quotes
//       res.send({ quote: quote.q, author: quote.a });  // Send only quote and author
//     } else {
//       throw new Error('No data returned from API');
//     }
//   } catch (error) {
//     console.error('Error fetching quote:', error);
//     res.status(500).send({ msg: 'Failed to fetch quote' }); // Send error message if something goes wrong
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


// const express = require('express');
// const axios = require('axios');
// const cookieParser = require('cookie-parser');
// const bcrypt = require('bcryptjs');
// const DB = require('./dbConnection'); // Assuming you have a DB connection file
// const app = express();

// const authCookieName = 'token';

// // The service port
// const port = process.argv.length > 2 ? process.argv[2] : 4000;

// // Middleware setup
// app.use(express.json()); // Parse JSON request bodies
// app.use(cookieParser()); // Parse cookies

// // Router for API endpoints
// const apiRouter = express.Router();
// app.use('/api', apiRouter);

// // API to fetch motivational quote from ZenQuotes
// apiRouter.get('/quote', async (_req, res) => {
//   try {
//     const response = await axios.get('https://zenquotes.io/api/random');
//     if (response.data && response.data.length > 0) {
//       const quote = response.data[0];
//       res.send({ quote: quote.q, author: quote.a });
//     } else {
//       throw new Error('No data returned from API');
//     }
//   } catch (error) {
//     console.error('Error fetching quote:', error);
//     res.status(500).send({ msg: 'Failed to fetch quote' });
//   }
// });

// // Auth routes
// apiRouter.post('/auth/create', async (req, res) => {
//   try {
//     const userExists = await DB.getUser(req.body.email);
//     if (userExists) {
//       res.status(409).send({ msg: 'User already exists' });
//     } else {
//       const user = await DB.createUser(req.body.email, req.body.password);
//       setAuthCookie(res, user.token);
//       res.send({ id: user._id });
//     }
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).send({ msg: 'Internal server error' });
//   }
// });

// apiRouter.post('/auth/login', async (req, res) => {
//   try {
//     const user = await DB.getUser(req.body.email);
//     if (user && await bcrypt.compare(req.body.password, user.password)) {
//       setAuthCookie(res, user.token);
//       res.send({ id: user._id });
//     } else {
//       res.status(401).send({ msg: 'Invalid email or password' });
//     }
//   } catch (error) {
//     console.error('Error logging in user:', error);
//     res.status(500).send({ msg: 'Internal server error' });
//   }
// });

// apiRouter.delete('/auth/logout', (_req, res) => {
//   res.clearCookie(authCookieName);
//   res.status(204).end();
// });

// // Secured routes that require authentication
// const secureApiRouter = express.Router();
// apiRouter.use(secureApiRouter);

// secureApiRouter.use(async (req, res, next) => {
//   const authToken = req.cookies[authCookieName];
//   const user = await DB.getUserByToken(authToken);
//   if (user) {
//     next();
//   } else {
//     res.status(401).send({ msg: 'Unauthorized' });
//   }
// });

// // Error handler middleware
// app.use((err, req, res, next) => {
//   res.status(500).send({ type: err.name, message: err.message });
// });

// // Function to set the auth token in a cookie
// function setAuthCookie(res, authToken) {
//   res.cookie(authCookieName, authToken, {
//     secure: true,
//     httpOnly: true,
//     sameSite: 'strict',
//   });
// }

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const DB = require('./dbConnection'); // Assuming you have a DB connection file
const path = require('path'); // For resolving file paths
const app = express();

const authCookieName = 'token';

// The service port
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies

// Serve static content (frontend)
app.use(express.static('public'));  // Ensure the public folder contains static files (e.g., index.html, images)

// API Router for service endpoints
const apiRouter = express.Router();
app.use('/api', apiRouter);

// API to fetch motivational quote from ZenQuotes
apiRouter.get('/quote', async (_req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    if (response.data && response.data.length > 0) {
      const quote = response.data[0];
      res.send({ quote: quote.q, author: quote.a });
    } else {
      throw new Error('No data returned from API');
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send({ msg: 'Failed to fetch quote' });
  }
});

// Auth routes
apiRouter.post('/auth/create', async (req, res) => {
  try {
    const userExists = await DB.getUser(req.body.email);
    if (userExists) {
      res.status(409).send({ msg: 'User already exists' });
    } else {
      const user = await DB.createUser(req.body.email, req.body.password);
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  try {
    const user = await DB.getUser(req.body.email);
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
    } else {
      res.status(401).send({ msg: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Secured routes that require authentication
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Error handler middleware
app.use((err, req, res, next) => {
  res.status(500).send({ type: err.name, message: err.message });
});

// Function to set the auth token in a cookie
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Route to handle the root URL (GET /)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Serve index.html from the 'public' folder
});

// Catch-all route for other undefined routes (e.g., React routes or other static assets)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Redirect all other requests to index.html (for SPA handling)
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
