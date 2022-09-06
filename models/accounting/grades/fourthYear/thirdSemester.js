const mongoose = require("mongoose");

const gradeSchema = require("../../../../common/gradeSchema");

const model = mongoose.model(
  "accfourthyearthirdsemestergrade",
  new mongoose.Schema(gradeSchema)
);

module.exports = model;
