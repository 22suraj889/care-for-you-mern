const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./mongo/db");
const userRoutes = require("./routes/userRoutes");
const dataRoutes = require("./routes/wardRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const bodyParser = require("body-parser");
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/user", userRoutes);
app.use("/data", dataRoutes);
app.use("/review", reviewRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
