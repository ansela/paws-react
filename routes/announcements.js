const express = require("express");
const mongoose = require("mongoose");
const Announcement = require("../models/Announcement.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  Announcement.find((err, announcements) => {
    if (err) return next(err);
    res.json(announcements);
  });
});

router.get("/:id", (req, res, next) => {
  Announcement.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.post("/", (req, res, next) => {
  console.log("posting", req.body);
  Announcement.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.put("/:id", (req, res, next) => {
  Announcement.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    (err, post) => {
      if (err) return next(err);
      res.json(post);
    }
  );
});

router.delete("/", (req, res, next) => {
  Announcement.deleteMany({}, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete("/:id", (req, res, next) => {
  Announcement.findOneAndDelete(
    { _id: req.params.id },
    req.body,
    (err, post) => {
      if (err) return next(err);
      res.json(post);
    }
  );
});

module.exports = router;
