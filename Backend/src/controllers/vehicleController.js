const CarType = require("../models/carType");
const BikeType = require("../models/bikeType");

exports.getAvailableVehicles = async (req, res) => {
  try {
    const cars = await CarType.findAll();
    const bikes = await BikeType.findAll();
    res.json({ cars, bikes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
