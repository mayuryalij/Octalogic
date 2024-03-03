const Booking = require("../models/booking");
const { Op } = require("sequelize");

exports.submitBooking = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      vehicletype,
      carModel,
      bikeModel,
      startDate,
      endDate,
    } = req.body;

    const existingBooking = await Booking.findOne({
      where: {
        [Op.or]: [
          {
            startDate: {
              [Op.between]: [startDate, endDate],
            },
          },
          {
            endDate: {
              [Op.between]: [startDate, endDate],
            },
          },
        ],
      },
    });

    if (existingBooking) {
      return res.status(400).json({ error: "Booking overlap detected" });
    }

    await Booking.create({
      firstname,
      lastname,
      vehicletype,
      carModel,
      bikeModel,
      startDate,
      endDate,
    });

    res.json({ message: "Booking submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
