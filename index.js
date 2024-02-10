const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const PORT = 4444;
app.use(cors("*"));
app.use(morgan("combined"));

app.get("/api/payment/callback", (req, res) => {
  res.json({ status: true });
});

app.listen(PORT, function () {
  console.log("App running");
});
