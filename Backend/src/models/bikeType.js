const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const BikeType = sequelize.define("BikeType", {
  bike: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = BikeType;
