const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const notificationSchema = new Schema({
  Msg: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = notification = mongoose.model(
  "notification",
  notificationSchema
);
