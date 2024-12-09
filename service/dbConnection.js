// const { MongoClient } = require('mongodb');
// const dbConfig = require('./dbConfig.json');

// async function testConnection() {
//   const client = new MongoClient(dbConfig.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   try {
//     await client.connect();
//     const db = client.db(dbConfig.startup); // Use the database name
//     console.log(`Connected to MongoDB database: ${dbConfig.startup}`);
//   } catch (error) {
//     console.error('MongoDB Connection Error:', error);
//   } finally {
//     await client.close();
//   }
// }

// testConnection();

const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const dbConfig = require('./dbConfig.json');

const client = new MongoClient(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = dbConfig.startup; // Use the database name
let db;

// Connect to the database and assign the connection to `db`
(async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log(`Connected to MongoDB database: ${dbName}`);
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1); // Exit if the connection fails
  }
})();

// Collections
const userCollection = () => db.collection('user');

// Test database connection
async function testConnection() {
  try {
    await client.connect();
    console.log(`Test connection successful to MongoDB database: ${dbName}`);
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
  } finally {
    await client.close();
  }
}

// Get a user by email
async function getUser(email) {
  return userCollection().findOne({ email });
}

// Get a user by token
async function getUserByToken(token) {
  return userCollection().findOne({ token });
}

// Create a new user
async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10); // Hash the password
  const user = {
    email,
    password: passwordHash,
    token: uuid.v4(), // Generate a unique token
  };
  await userCollection().insertOne(user); // Insert user into the collection
  return user;
}

// Exported functions
module.exports = {
  testConnection,  // Keep the existing testConnection function
  getUser,
  getUserByToken,
  createUser,
};
