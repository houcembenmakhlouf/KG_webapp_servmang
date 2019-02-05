const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const noteSchema = new Schema({
  mat1: {
    type: Number,
    required: true
  },
  mat2: {
    type: Number,
    required: true
  },
  mat3: {
    type: Number,
    required: true
  },
  mat4: {
    type: Number,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  UserRef: {
    type: String,
    required: true
  }
});

module.exports = note = mongoose.model("note", noteSchema);
