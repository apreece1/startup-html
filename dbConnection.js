// backend/dbConnection.js
const mongoose = require('mongoose');
const dbConfig = require('./dbConfig.json');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application on connection failure
  }
};

module.exports = connectToDatabase;
