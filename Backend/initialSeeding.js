const sequelize = require("./src/database/db");
const CarType = require("./src/models/carType");
const BikeType = require("./src/models/bikeType");

(async () => {
  await sequelize.sync({ force: true });

  await CarType.create({ model1: "Hatchback", model2: "SUV", model3: "Sedan" });

  await BikeType.create({ bike: "sports" });
})();
