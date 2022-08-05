const express = require("express");
const cors = require("cors");
const path = require("path");
const planetsRouter = require("./routes/planets/router");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use(express.json());
app.use(planetsRouter);
app.use(express.static(path.join(__dirname, "../client-build")));

module.exports = app;
