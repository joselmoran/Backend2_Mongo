const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect(config.connectionString, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = {
	Car: require('../cars/car.model'),
	Ride: require('../rides/ride.model'),
	Customer: require('../users/models/customer.model'),
	Driver: require('../users/models/driver.model'),
};
