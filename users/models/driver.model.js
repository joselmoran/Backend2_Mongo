const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  driver_id: {type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: false },
  phone: { type: String, required: true }
});

schema.set('toJSON', { virtuals: false });

module.exports = mongoose.model('Driver', schema);
