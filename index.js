const Joi = require("joi");
const logger = require("./logger");
const auth = require("./auth");
const express = require("express");
const genres = require("./routes/genres");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/genres", genres);

app.use(logger);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
