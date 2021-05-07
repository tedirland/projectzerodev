const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countySchema = new Schema({
  name: { type: String, required: true, maxlength: 128 },
  countySeat: { type: String, required: true, maxlength: 64 },
  website: { type: String, maxlength: 64 },
  population: String,
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('County', countySchema);
