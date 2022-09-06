const mongoose = require("mongoose");

const gradeSchema = require("../../../../common/gradeSchema");

const model = mongoose.model(
  "accthirdyearfirstsemestergrade",
  new mongoose.Schema(gradeSchema)
);

module.exports = model;
