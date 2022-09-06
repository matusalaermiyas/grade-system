const mongoose = require("mongoose");

const gradeSchema = require("../../../../common/gradeSchema");

const model = mongoose.model(
  "accfourthyearfirstsemestergrade",
  new mongoose.Schema(gradeSchema)
);

module.exports = model;
