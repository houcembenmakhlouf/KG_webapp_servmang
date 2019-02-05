const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Adress: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  },
  Mail: {
    type: String,
    required: true
  },

  Image: {
    type: String,
    required: true
  },
  Paiment: {
    type: Boolean
  },
  Password: {
    type: String,
    required: true
  },
  Role: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = user = mongoose.model("user", userSchema);
