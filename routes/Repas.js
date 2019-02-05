const express = require("express");
const router = express.Router();
const { ObjectID } = require("mongodb");
// repas Model
const repas = require("../models/repas");

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  repas.find().then(repas => res.json(repas));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post("/", (req, res) => {
  const newrepas = new repas({
    Lundi: req.body.Lundi,
    Mardi: req.body.Mardi,
    Mercredi: req.body.Mercredi,
    Jeudi: req.body.Jeudi,
    Vendredi: req.body.Vendredi,
    Samedi: req.body.Samedi,
    Date: req.body.Date
  });

  newrepas.save().then(repas => res.json(repas));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete("/:id", (req, res) => {
  repas
    .findById(req.params.id)
    .then(repas => repas.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   update api/items/:id
// @desc    Delete A Item
// @access  Public
router.put("/:id", (req, res) => {
  let id = ObjectID(req.params.id);
  repas.updateOne(
    { _id: id },
    {
      $set: {
        Lundi: req.body.Lundi,
        Mardi: req.body.Mardi,
        Mercredi: req.body.Mercredi,
        Jeudi: req.body.Jeudi,
        Vendredi: req.body.Vendredi,
        Samedi: req.body.Samedi,
        Date: req.body.Date
      }
    },
    { upsert: true },
    (err, data) => {
      console.log(data);

      if (err) res.send("cant modify repas");
      else res.send(data);
    }
  );
});
module.exports = router;
