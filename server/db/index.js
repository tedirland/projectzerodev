const mongoose = require('mongoose');
const config = require('../config/dev');
require('./models/county');

exports.connect = () => {
  mongoose.connect(
    config.DB_URI,
    {
      useNewUrlParser: true,

      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => {
      console.log('Connected to MongoDB');
    }
  );
};
