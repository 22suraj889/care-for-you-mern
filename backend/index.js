const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./mongo/db");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const app = express();
connectDB();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
