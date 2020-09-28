const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  customer_id: {type: Number, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Customer', schema);
