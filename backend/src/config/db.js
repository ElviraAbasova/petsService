require("dotenv/config")
const mongoose = require("mongoose") 
const mongoUrl = process.env.MongoUrl
mongoose.connect(mongoUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
