const mongoose = require("mongoose");
const departmentHeadSchema = require("../../common/departmentHeadSchema");

const model = mongoose.model(
  "mgmtDepartmentHead",
  new mongoose.Schema(departmentHeadSchema)
);

module.exports = model;
