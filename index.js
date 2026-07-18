require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const FortuneRoute = require("./routes/fortune.route.js");
const PORT = process.env.PORT || 5000;

/** Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** Routes */
app.use("/fortunes", FortuneRoute);

/* Connects to MongoDB */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
