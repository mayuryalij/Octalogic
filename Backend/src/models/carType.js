const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const CarType = sequelize.define("CarType", {
  model1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = CarType;
