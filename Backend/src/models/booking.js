const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Booking = sequelize.define("Booking", {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicletype: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carModel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bikeModel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Booking;
