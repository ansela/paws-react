const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Announcement = require("../models/Announcement.js");
const getToken = require("./auth-util").getToken;

const router = express.Router();

router.get("/", (req, res, next) => {
  Announcement.find((err, announcements) => {
    if (err) return next(err);
    res.json(announcements);
  });
});

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      Announcement.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      Announcement.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      Announcement.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        (err, post) => {
          if (err) return next(err);
          res.json(post);
        }
      );
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      Announcement.deleteMany({}, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      Announcement.findOneAndDelete(
        { _id: req.params.id },
        req.body,
        (err, post) => {
          if (err) return next(err);
          res.json(post);
        }
      );
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

module.exports = router;
