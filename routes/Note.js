const express = require("express");
const router = express.Router();
const { ObjectID } = require("mongodb");
// Item Model
const note = require("../models/note");

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  note.find().then(note => res.json(note));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post("/", (req, res) => {
  const newNote = new note({
    mat1: req.body.mat1,
    mat2: req.body.mat2,
    mat3: req.body.mat3,
    mat4: req.body.mat4,
    Description: req.body.description,
    UserRef: req.body.UserRef
  });

  newNote.save().then(note => res.json(note));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete("/:id", (req, res) => {
  note
    .findById(req.params.id)
    .then(note => note.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   update api/items/:id
// @desc    Delete A Item
// @access  Public
router.put("/:id", (req, res) => {
  let id = ObjectID(req.params.id);
  note.updateOne(
    { _id: id },
    {
      $set: {
        mat1: req.body.mat1,
        mat2: req.body.mat2,
        mat3: req.body.mat3,
        mat4: req.body.mat4,
        Description: req.body.description
      }
    },
    { upsert: true },
    (err, data) => {
      console.log(data);

      if (err) res.send("cant modify note");
      else res.send(data);
    }
  );
});
module.exports = router;
