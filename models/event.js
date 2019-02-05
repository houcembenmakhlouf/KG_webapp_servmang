const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const eventSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Date: {
    type: Date ,
    required: true
  },
  Image: {
    type: String,
    required: true
  }
});

module.exports = event = mongoose.model("event", eventSchema);
