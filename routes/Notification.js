const express = require("express");
const router = express.Router();
const { ObjectID } = require("mongodb");
// notification Model
const notification = require("../models/notification");

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  notification.find().then(notification => res.json(notification));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post("/", (req, res) => {
  const newnotification = new notification({
    Msg: req.body.Msg,
    Date: req.body.Date
  });

  newnotification.save().then(notification => res.json(notification));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete("/:id", (req, res) => {
  notification
    .findById(req.params.id)
    .then(notification =>
      notification.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

// @route   update api/items/:id
// @desc    Delete A Item
// @access  Public
router.put("/:id", (req, res) => {
  let id = ObjectID(req.params.id);
  notification.updateOne(
    { _id: id },
    {
      $set: {
        Msg: req.body.Msg,
        Date: req.body.Date
      }
    },
    { upsert: true },
    (err, data) => {
      console.log(data);

      if (err) res.send("cant modify notification");
      else res.send(data);
    }
  );
});
module.exports = router;
