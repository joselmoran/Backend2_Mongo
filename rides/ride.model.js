const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  first_point: {type: String, unique: true, required: true },
  target_point: { type: String, unique: true, required: true },
  driver_id: { type: String, required: true },
  customer_id: { type: Number, required: true },
  time: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Ride', schema);
