const router = require("express").Router();

const firstYearFirstSemesterGrades = require("../../models/accounting/grades/firstYear/firstSemester");
const firstYearSecondSemesterGrades = require("../../models/accounting/grades/firstYear/secondSemester");
const firstYearThirdSemesterGrades = require("../../models/accounting/grades/firstYear/thirdSemester");

const secondYearFirstSemesterGrades = require("../../models/accounting/grades/secondYear/firstSemester");
const secondYearSecondSemesterGrades = require("../../models/accounting/grades/secondYear/secondSemester");
const secondYearThirdSemesterGrades = require("../../models/accounting/grades/secondYear/thirdSemester");

const thirdYearFirstSemesterGrades = require("../../models/accounting/grades/thirdYear/firstSemester");
const thirdYearSecondSemesterGrades = require("../../models/accounting/grades/thirdYear/secondSemester");
const thirdYearThirdSemesterGrades = require("../../models/accounting/grades/thirdYear/thirdSemester");

const fourthYearFirstSemesterGrades = require("../../models/accounting/grades/fourthYear/firstSemester");
const fourthYearSecondSemesterGrades = require("../../models/accounting/grades/fourthYear/secondSemester");
const fourthYearThirdSemesterGrades = require("../../models/accounting/grades/fourthYear/thirdSemester");

const auth = require("../../middlewares/authenticate");

const loadGrades = require("../../middlewares/loadGrades");

const {
  validateAcademicYear,
  validateYearAndSemester,
} = require("../../middlewares/validate");

router.get("/", auth, async (req, res) => {
  const student = req.student;

  switch (parseInt(student.year)) {
    case 1:
      const firstYearStudentId = student.studentId;

      const result11 = await firstYearFirstSemesterGrades.find({
        studentId: firstYearStudentId,
      });
      const result12 = await firstYearSecondSemesterGrades.find({
        studentId: firstYearStudentId,
      });
      const result13 = await firstYearThirdSemesterGrades.find({
        studentId: firstYearStudentId,
      });

      const firstYearGrades = [[result11, result12, result13]];

      res.send(firstYearGrades);
      break;
    case 2:
      const secondYearStudentId = student.studentId;
      // first year grades
      const result211 = await firstYearFirstSemesterGrades.find({
        studentId: secondYearStudentId,
      });
      const result212 = await firstYearSecondSemesterGrades.find({
        studentId: secondYearStudentId,
      });
      const result213 = await firstYearThirdSemesterGrades.find({
        studentId: secondYearStudentId,
      });

      // second year grades
      const result21 = await secondYearFirstSemesterGrades.find({
        studentId: secondYearStudentId,
      });
      const result22 = await secondYearSecondSemesterGrades.find({
        studentId: secondYearStudentId,
      });
      const result23 = await secondYearThirdSemesterGrades.find({
        studentId: secondYearStudentId,
      });

      const secondYearGrades = [
        [result211, result212, result213],
        [result21, result22, result23],
      ];

      res.send(secondYearGrades);
      break;
    case 3:
      const thirdYearStudentId = student.studentId;
      // first year grades
      const result311 = await firstYearFirstSemesterGrades.find({
        studentId: thirdYearStudentId,
      });
      const result312 = await firstYearSecondSemesterGrades.find({
        studentId: thirdYearStudentId,
      });
      const result313 = await firstYearThirdSemesterGrades.find({
        studentId: thirdYearStudentId,
      });

      // second year grades
      const result321 = await secondYearFirstSemesterGrades.find({
        studentId: thirdYearStudentId,
      });
      const result322 = await secondYearSecondSemesterGrades.find({
        studentId: thirdYearStudentId,
      });
      const result323 = await secondYearThirdSemesterGrades.find({
        studentId: thirdYearStudentId,
      });

      // third year grades
      const result31 = await thirdYearFirstSemesterGrades.find({
        studentId: thirdYearStudentId,
      });
      const result32 = await thirdYearSecondSemesterGrades.find({
        studentId: thirdYearStudentId,
      });
      const result33 = await thirdYearThirdSemesterGrades.find({
        studentId: thirdYearStudentId,
      });

      const thirdYearGrades = [
        [result311, result312, result313],
        [result321, result322, result323],
        [result31, result32, result33],
      ];

      res.send(thirdYearGrades);
      break;
    case 4:
      const fourthYearStudentId = student.studentId;

      // first year grades
      const result411 = await firstYearFirstSemesterGrades.find({
        studentId: fourthYearStudentId,
      });
      const result412 = await firstYearSecondSemesterGrades.find({
        studentId: fourthYearStudentId,
      });
      const result413 = await firstYearThirdSemesterGrades.find({
        studentId: fourthYearStudentId,
      });

      // second year grades
      const result421 = await secondYearFirstSemesterGrades.find({
        studentId: fourthYearStudentId,
      });
      const result422 = await secondYearSecondSemesterGrades.find({
        studentId: fourthYearStudentId,
      });
      const result423 = await secondYearThirdSemesterGrades.find({
        studentId: fourthYearStudentId,
      });

      // third year grades
      const result431 = await thirdYearFirstSemesterGrades.find({
        studentId: fourthYearStudentId,
      });
      const result432 = await thirdYearSecondSemesterGrades.find({
        studentId: fourthYearStudentId,
      });
      const result433 = await thirdYearThirdSemesterGrades.find({
        studentId: fourthYearStudentId,
      });

      // fourth year grades
      const result41 = await fourthYearFirstSemesterGrades.find({
        studentId: fourthYearStudentId,
      });
      const result42 = await fourthYearSecondSemesterGrades.find({
        studentId: fourthYearStudentId,
      });
      const result43 = await fourthYearThirdSemesterGrades.find({
        studentId: fourthYearStudentId,
      });

      const fourthYearGrades = [
        [result411, result412, result413],

        [result421, result422, result423],

        [result431, result432, result433],
        [result41, result42, result43],
      ];

      res.send(fourthYearGrades);
      break;
    default:
      res.status(400).send("Invalid academic year.");
  }
});

router.get("/:year", auth, (req, res) => {
  res.send("Showing " + req.params.year + " grades.");
});

router.post(
  "/:year/:semester",
  [auth, validateYearAndSemester, loadGrades],
  async (req, res) => {
    // Entering grades
    const semester = parseInt(req.params.semester);

    switch (parseInt(req.params.year)) {
      case 1:
        // TODO
        if (semester === 1) {
          await firstYearFirstSemesterGrades.insertMany(req.grades);
          res.status(200).send();
        } else if (semester === 2) {
          await firstYearSecondSemesterGrades.insertMany(req.grades);
          res.status(200).send();
        } else if (semester === 3) {
          await firstYearThirdSemesterGrades.insertMany(req.grades);
          res.status(200).send();
        }
        break;

      case 2:
        // TODO
        if (semester === 1) {
          await secondYearFirstSemesterGrades.insertMany(req.grades);
          res.status(200).send();
        } else if (semester === 2) {
          await secondYearSecondSemesterGrades.insertMany(req.grades);
          res.status(200).send();
        } else if (semester === 3) {
          await secondYearThirdSemesterGrades.insertMany(req.grades);
          return res.status().send();
        }

        break;

      case 3:
        // TODO
        if (semester === 1) {
          await thirdYearFirstSemesterGrades.insertMany(req.grades);
          return res.status(200).send();
        } else if (semester === 2) {
          await thirdYearSecondSemesterGrades.insertMany(req.grades);
          return res.status(200).send();
        } else if (semester === 3) {
          await thirdYearThirdSemesterGrades.insertMany(req.grades);
          return res.status(200).send();
        }
        break;
      case 4:
        // TODO
        if (semester === 1) {
          await fourthYearFirstSemesterGrades.insertMany(req.grades);
          return res.status(200).send();
        } else if (semester === 2) {
          await fourthYearSecondSemesterGrades.insertMany(req.grades);
          return res.status(200).send();
        } else if (semester === 3) {
          await fourthYearThirdSemesterGrades.insertMany(req.grades);
          return res.status(200).send();
        }
        break;
    }
  }
);

module.exports = router;
