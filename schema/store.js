const mongoose = require("mongoose");

const store = mongoose.Schema({
  name: { require: true, type: String },
  school: String,
  rank: Number
});

module.exports = mongoose.model("storeDetail", store);
