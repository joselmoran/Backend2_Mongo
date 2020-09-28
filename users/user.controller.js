const express = require('express');
const router = express.Router();
const userService = require('./user.service');

const createCustomer = (req, res, next) => {
	userService.createCustomer(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getAllCustomers = (req, res, next) => {
	userService.getAllCustomers()
		.then(users => res.json(users))
		.catch(err => next(err));
};

const createDriver = (req, res, next) => {
	userService.createDriver(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getAllDrivers = (req, res, next) => {
	userService.getAllDrivers()
		.then(users => res.json(users))
		.catch(err => next(err));
};

const deleteCustomerById = (req, res, next) => {
	userService.deleteCustomerById()
		.then(() => res.status(200).json({success: true}))
		.catch(err => next(err)); 
}

// routes driver
router.post('/drivers/create', createDriver);
router.get('/drivers', getAllDrivers);

// routes customers
router.post('/customers/create', createCustomer);
router.get('/customers', getAllCustomers);

module.exports = router;
