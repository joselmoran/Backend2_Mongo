const express = require('express');
const router = express.Router();
const carService = require('./car.service');

const createCar = (req, res, next) => {
  carService.createCar(req.body)
    .then(() => res.status(201).send(req.body))
    .catch(err => next(err));
};

const getAllCars = (req, res, next) => {
  carService.getAllCars()
    .then(cars => res.json(cars))
    .catch(err => next(err));
};



const getCarDetails = (req, res, next) => {
  carService.getCarDetails(req.params.plate)
    .then(car => res.json(car))
    .catch(err => next(err));
};

// routes customers
router.post('/create', createCar);
router.get('/', getAllCars);
router.get('/:plate/detail', getCarDetails);

module.exports = router;
