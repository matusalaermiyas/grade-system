require("express-async-errors");
require('dotenv').config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const morgan = require("morgan");
const fs = require('fs');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "data"),
  filename: (req, file, cb) => cb(null, "grades.xlsx"),
});

const upload = multer({ storage: storage }).single("file");

// students
const csLogin = require("./routes/cs/login");
const csGrade = require("./routes/cs/grades");
const csSignup = require("./routes/cs/signup");

// instructor
const { csStaffLogin, csStaffGrade } = require("./routes/staff/cs");

// department head
const csDhead = require("./routes/departmentHeads/cs");

const accountingLogin = require("./routes/accounting/login");
const accountingGrade = require("./routes/accounting/grades");
const accountingSignup = require("./routes/accounting/signup");

const businessAdminstrationLogin = require("./routes/businessAdminstration/login");
const businessAdminstrationGrade = require("./routes/businessAdminstration/grades");
const businessAdminstrationSignup = require("./routes/businessAdminstration/signup");

const marketingLogin = require("./routes/marketing/login");
const marketingGrade = require("./routes/marketing/grades");
const marketingSignup = require("./routes/marketing/signup");

const error = require("./middlewares/error");

mongoose
  .connect("mongodb://localhost/grade")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.log("mongodb connection error ", err));

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))

app.use("/cs/login", csLogin);
app.use("/cs/grade", csGrade);

app.use("/cs/signup", async (req, res, next) => {

  upload(req, res, (err) => {
    if (err) throw Error(err);

    next();
  }); // end upload

  next();
} , csSignup);

app.use("/cs/staff/login", csStaffLogin);
app.use(
  "/cs/staff/grade",
  (req, res, next) => {
    upload(req, res, (err) => {
      if (err) throw Error(err);

      next();
    }); // end upload
  },
  csStaffGrade
);

app.use("/cs/dhead/login", csDhead.login);
app.use("/cs/dhead/insList", csDhead.instructorsList);
app.use("/cs/dhead/addIns", csDhead.addInstructor);
app.use("/cs/dhead/removeIns", csDhead.removeInstructor);
app.use("/cs/dhead/students", csDhead.studentsList);

app.use("/accounting/login", accountingLogin);
app.use("/accounting/grade", accountingGrade);
app.use("/accounting/signup", accountingSignup);

app.use("/buad/login", businessAdminstrationLogin);
app.use("/buad/grade", businessAdminstrationGrade);
app.use("/buad/signup", businessAdminstrationSignup);

app.use("/marketing/login", marketingLogin);
app.use("/marketing/grade", marketingGrade);
app.use("/marketing/signup", marketingSignup);

app.use(error);

app.listen(4000, console.log("Server on 4000.."));
