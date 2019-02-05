const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Event = require("./routes/Event");
const Note = require("./routes/Note");
const User = require("./routes/User");
const Repas = require("./routes/Repas");
const Notification = require("./routes/Notification");

const app = express();
const passport = require("passport");

app.use(bodyParser.json());
app.use(cors());

const db = "mongodb://localhost:27017/Api";

// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  ) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

app.use("/Event", Event);
app.use("/Note", Note);
app.use("/User", User);
app.use("/Repas", Repas);
app.use("/Notification", Notification);

app.listen(3007, err => {
  if (err) console.log("not running");
  else console.log("running");
});
