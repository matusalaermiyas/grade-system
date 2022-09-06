const mongoose = require("mongoose");
const departmentHeadSchema = require("../../common/departmentHeadSchema");

const model = mongoose.model(
  "accDepartmentHead",
  new mongoose.Schema(departmentHeadSchema)
);

module.exports = model;
