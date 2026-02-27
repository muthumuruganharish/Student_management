const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const cors = require("cors");
const Route = require("./Router/Route");

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api", Route);

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });