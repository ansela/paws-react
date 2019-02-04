const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
  message: String,
  startDate: Number,
  endDate: Number
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
