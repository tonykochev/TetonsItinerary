const mongoose = require("mongoose");

const hikeSchema = new mongoose.Schema({
  name: String,
  distance: String,
  difficulty: String,
  elevation: String,
  description: String
});

module.exports = mongoose.model("Hike", hikeSchema);
