const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const app = express();


app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/7-solitaire/", require("./routes/7Solitaire"))


module.exports = app;