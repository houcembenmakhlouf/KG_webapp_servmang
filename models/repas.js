const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const repasSchema = new Schema({
  Lundi: {
    type: String,
    required: true
  },
  Mardi: {
    type: String,
    required: true
  },
  Mercredi: {
    type: String,
    required: true
  },
  Jeudi: {
    type: String,
    required: true
  },
  Vendredi: {
    type: String,
    required: true
  },

  Samedi: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: true
  }
});

module.exports = repas = mongoose.model("repas", repasSchema);
