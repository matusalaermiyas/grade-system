const mongoose = require("mongoose");

const gradeSchema = require("../../../../common/gradeSchema");

const model = mongoose.model(
  "buadsecondyearfirstsemestergrade",
  new mongoose.Schema(gradeSchema)
);

module.exports = model;
