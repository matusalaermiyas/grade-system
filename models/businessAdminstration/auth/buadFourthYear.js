const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const authSchema = require("../../../common/authSchema");

const schema = new mongoose.Schema(authSchema);
schema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      year: this.year,
      studentId: this.studentId,
      department: this.department,
      duration: this.duration,
    },
    process.env.PRIVATEKEY
  );
};

const model = mongoose.model("buadfourthyearstudent", schema);

module.exports = model;
