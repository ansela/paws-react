const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const announcements = require("./routes/announcements");

const app = express();
const port = process.env.PORT || 5000;
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/paws", { useNewUrlParser: true })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/announcements", announcements);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
