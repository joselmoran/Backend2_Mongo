const db = require('../config/database');
const Ride = db.Ride;

const getAllRides = async() => {
    return await Ride.find().sort({ time: -1 });
};

const createRide = async(rideParam) => {
    const ride = new Ride(rideParam);
    await ride.save();
};


const getRideDetails = async(id) => {
    return await Ride.findById(id);
};

// Eliminar ride by id
const deleteRideById = async(rideId) => {
    return await Ride.findByIdAndDelete(rideId);
}

// Actualizar ride by id
const updateRideById = async (rideId, ride) => {
  return await Ride.findByIdAndUpdate(rideId, ride);
}

module.exports = {
    getAllRides,
    createRide,
    getRideDetails,
    deleteRideById,
    updateRideById
};