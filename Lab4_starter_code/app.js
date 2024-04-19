 // Author: Shah Bano
// Date: 18th April 2024
// Description: Lab 4 -->
require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// Get MongoDB connection string from environment variables
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully');
});
