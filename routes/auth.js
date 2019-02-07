const mongoose = require("mongoose");
const passport = require("passport");
const settings = require("../config/settings");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");
const getToken = require("./auth-util").getToken;

router.post("/register", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: "Please pass username and password." });
  } else {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    newUser.save(err => {
      if (err) return res.json({ success: false, msg: err });
      res.json({ success: true, msg: "Successfully created new user." });
    });
  }
});

router.post("/login", (req, res) => {
  User.findOne(
    {
      username: req.body.username
    },
    (err, user) => {
      if (err) throw err;

      if (!user) {
        res.status(401).send({
          success: false,
          msg: "Authentication failed. User not found."
        });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            const token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({ success: true, token: "JWT " + token });
          } else {
            res.status(401).send({
              success: false,
              msg: "Authentication failed. Wrong password"
            });
          }
        });
      }
    }
  );
});

router.get(
  "/loggedIn",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      return res.json({ success: true, msg: "User is authorized." });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.get("/users", (req, res, next) => {
  User.find((err, users) => {
    if (err) return next(err);
    return res.json(users);
  });
});

router.delete("/users/:id", (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id }, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
