const express = require("express");
const router = express.Router();
const { ObjectID } = require("mongodb");
// Item Model
const event = require("../models/event");

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  event.find().then(event => res.json(event));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post("/", (req, res) => {
  const newEvent = new event({
    Title: req.body.Title,
    Description: req.body.Description,
    Image: req.body.Image,
    Date: req.body.Date
  });

  newEvent.save().then(event => res.json(event));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete("/:id", (req, res) => {
  event
    .findById(req.params.id)
    .then(event => event.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   update api/items/:id
// @desc    Delete A Item
// @access  Public
router.put("/:id", (req, res) => {
  let id = ObjectID(req.params.id);
  event.updateOne(
    { _id: id },
    {
      $set: {
        Title: req.body.Title,
        Description: req.body.Description,
        Image: req.body.Image,
        Date: req.body.Date
      }
    },
    { upsert: true },
    (err, data) => {
      console.log(data);

      if (err) res.send("cant modify user");
      else res.send(data);
    }
  );
});
module.exports = router;
