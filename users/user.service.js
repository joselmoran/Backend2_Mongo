const db = require('../config/database');
const Customer = db.Customer;
const Driver = db.Driver;

const getAllCustomers = async () => {
	return await Customer.find();
};

const createCustomer = async (customerParam) => {
	if (await Customer.findOne({ username: customerParam.username })) {
		throw 'Customer "' + customerParam.username + '" is already taken';
	}
	const customer = new Customer(customerParam);
	await customer.save();
};

const createDriver = async (driverParam) => {
	if (await Driver.findOne({ username: driverParam.username })) {
		throw 'Driver "' + driverParam.username + '" is already taken';
	}
	const customer = new Customer(driverParam);
	await customer.save();
};

const getAllDrivers = async () => {
	return await Driver.find();
};

const deleteCustomerById = async (customerId) => {
	const customer = await Customer.findByIdAndDelete(customerId);
}

module.exports = {
	getAllDrivers,
	getAllCustomers,
	createCustomer,
	createDriver,
	deleteCustomerById
};
