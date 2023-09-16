const mongoose = require('mongoose');
const config = require('config');

const db = config.get("mongoURI");

function connectDB() {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log('DB is connected'))
    .catch((err) => {
      console.error('Error connecting to DB:', err);
      process.exit(1);
    });
}

module.exports = connectDB;
