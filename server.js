const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/express_backend", (req, res) => {
  console.log("fill request");
  res.send({ express: "CONNECTED" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
