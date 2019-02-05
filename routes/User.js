const express = require("express");
const router = express.Router();
const { ObjectID } = require("mongodb");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// user Model
const user = require("../models/user");

// @route   GET api/users
// @desc    Get All users
// @access  Public
router.get("/", (req, res) => {
  user.find().then(user => res.json(user));
});

// @route   POST api/users
// @desc    Create An user
// @access  Public
router.post("/", (req, res) => {
  const avatar = gravatar.url(req.body.Mail, {
    s: "200",
    r: "pg",
    d: "mm"
  });
  const newUser = new user({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Adress: req.body.Adress,
    PhoneNumber: req.body.PhoneNumber,
    Mail: req.body.Mail,
    Image: avatar,
    Password: req.body.Password,
    Paiment: req.body.Paiment,
    Role: req.body.Role,
    Date: req.body.Date
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.Password, salt, (err, hash) => {
      if (err) throw err;
      newUser.Password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
  });

  // newUser.save().then(user => res.json(user));
});
router.post("/login", (req, res) => {
  const Mail = req.body.Mail;
  const Password = req.body.Password;
  //find user by mail
  user.findOne({ Mail }).then(user => {
    if (!user) {
      return res.status(404).json({ Mail: "user not found" });
    }
    //check pass
    bcrypt.compare(Password, user.Password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user._id,
          FirstName: user.FirstName,
          LastName: user.LastName,
          Adress: user.Adress,
          PhoneNumber: user.PhoneNumber,
          Mail: user.Mail,
          Image: user.avatar,
          Image: user.avatar,
          Paiment: user.Paiment,
          Role: user.Role,
          Date: user.Date
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              payload
            });
          }
        );
      } else {
        return res.status(404).json({ Password: "Password incorrect" });
      }
    });
  });
});

// @route   DELETE api/users/:id
// @desc    Delete A user
// @access  Public
router.delete("/:id", (req, res) => {
  user
    .findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   update api/users/:id
// @desc    Delete A user
// @access  Public
router.put("/:id", (req, res) => {
  let id = ObjectID(req.params.id);
  user.updateOne(
    { _id: id },
    {
      $set: {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Adress: req.body.Adress,
        PhoneNumber: req.body.PhoneNumber,
        Mail: req.body.Mail,
        Paiment: req.body.Paiment,
        Date: Date.now
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

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  (req, res, next) => {
    next();
  },
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      LastName: req.user.LastName,
      Mail: req.user.Mail
    });
  }
);

module.exports = router;
