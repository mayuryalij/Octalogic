const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const vehicleRoutes = require("./src/routes/vehicleRoutes");
const bookingRoutes = require("./src/routes/bookingRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use("/api", vehicleRoutes);
app.use("/api", bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
