const mongoose = require("mongoose");

const gradeSchema = require("../../../../common/gradeSchema");

const model = mongoose.model(
  "buadfourthyearfirstsemestergrade",
  new mongoose.Schema(gradeSchema)
);

// TODO: Work here
module.exports = model;
