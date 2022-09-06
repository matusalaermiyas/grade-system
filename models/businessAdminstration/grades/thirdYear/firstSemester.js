const mongoose = require("mongoose");

const gradeSchema = require("../../../../common/gradeSchema");

const model = mongoose.model(
  "buadthirdyearfirstsemestergrade",
  new mongoose.Schema(gradeSchema)
);

module.exports = model;
