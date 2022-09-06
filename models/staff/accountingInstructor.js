const mongoose = require("mongoose");

const schema = require("../../common/instructorsSchema");

const model = mongoose.model(
  "accountinginstructor",
  new mongoose.Schema(schema)
);

module.exports = model;
