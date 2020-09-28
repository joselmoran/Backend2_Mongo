const db = require('../config/database');
const Car = db.Car;

const getAllCars = async () => {
  return await Car.find();
};

const createCar = async (carParam) => {
  const car = new Car(carParam);
  await car.save();
};



const getCarDetails = async (carPlate) => {
  const query = {plate: carPlate};
  return await Car.find(query);
  
};

module.exports = {
  getAllCars,
  createCar,
  getCarDetails
};
