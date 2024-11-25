const mongoose = require('mongoose');

function connectDatabase() {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error.message);
    });
}

module.exports = connectDatabase;
