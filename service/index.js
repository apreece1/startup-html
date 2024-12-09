// const express = require('express');
// const axios = require('axios'); // Import axios
// const db = require('./dbConnection');
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

const express = require('express');
const axios = require('axios'); // Import axios
const cookieParser = require('cookie-parser');
const db = require('./dbConnection'); // Database connection and functions
const app = express();

const authCookieName = 'token'; // Cookie name for authentication
const port = process.argv.length > 2 ? process.argv[2] : 4000; // The service port

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static('public')); // Serve static content (frontend)

// Router for API endpoints
const apiRouter = express.Router();
app.use('/api', apiRouter);

// API to fetch motivational quotes from ZenQuotes
apiRouter.get('/quote', async (_req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');

    if (response.data && response.data.length > 0) {
      const quote = response.data[0]; // ZenQuotes returns an array of quotes
      res.send({ quote: quote.q, author: quote.a }); // Send only quote and author
    } else {
      throw new Error('No data returned from API');
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send({ msg: 'Failed to fetch quote' });
  }
});

// Register a new user
apiRouter.post('/auth/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (await db.getUser(email)) {
      res.status(409).send({ msg: 'User already exists' });
      return;
    }

    const user = await db.createUser(email, password);

    res.cookie(authCookieName, user.token, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });

    res.status(201).send({ id: user._id, email: user.email });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

// Login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.getUser(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      res.cookie(authCookieName, user.token, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
      });

      res.send({ id: user._id, email: user.email });
    } else {
      res.status(401).send({ msg: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

// Logout a user
apiRouter.post('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName); // Clear the auth cookie
  res.status(204).end();
});

// Get the current authenticated user
apiRouter.get('/auth/me', async (req, res) => {
  try {
    const token = req.cookies[authCookieName];
    const user = await db.getUserByToken(token);

    if (user) {
      res.send({ email: user.email });
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  } catch (error) {
    console.error('Error verifying user:', error);
    res.status(500).send({ msg: 'Internal server error' });
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
