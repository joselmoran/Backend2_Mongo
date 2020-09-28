const express = require('express');
const router = express.Router();
const rideService = require('./ride.service');

const createRide = (req, res, next) => {
    rideService.createRide(req.body)
        .then(() => res.status(201).send(req.body))
        .catch(err => next(err));
};

const getAllRides = (req, res, next) => {
    rideService.getAllRides()
        .then(rides => {
            // console.log('rides: ', rides);
            res.json(rides)
        })
        .catch(err => next(err));
};

const getRideDetails = (req, res, next) => {
    rideService.getRideDetails(req.params.id)
        .then(rides => {
            console.log(rides);
            res.json(rides)
        })
        .catch(err => next(err));
};

const deleteRideDelete = (req, res, next) => {
    console.log('se va a borrar');
    rideService.deleteRideById(req.params.id)
        .then(() => {
            console.log('Se borro un Ride');
            res.status(200).json({ id: req.params.id });
        })
        .catch(err => next(err));
};

const updateRideById = (req, res, next) => {
  const rideId = req.params.id;
  const data = req.body;
  rideService.updateRideById(rideId, data)
    .then(() => {
      console.log('Se actualizo un Ride');
      res.status(200).json({ id: req.params.id });
    })
    .catch(err => next(err));
};


// routes customers
router.post('/create', createRide);
router.get('/', getAllRides);
router.get('/:id/detail', getRideDetails);

// Eliminar ride
router.delete('/:id/delete', deleteRideDelete);

// Update Ride
router.put('/:id/update', updateRideById);


module.exports = router;