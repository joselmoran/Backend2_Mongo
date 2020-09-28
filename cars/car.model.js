const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  car: {type: String, unique: true, required: true },
  model: { type: String, unique: true, required: true },
  motor: { type: String, required: true },
  chassis: { type: String, required: true },
  color: { type: String, required: false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Car', schema);
