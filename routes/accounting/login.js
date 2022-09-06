const router = require("express").Router();
const _ = require("lodash");

const firstYearStudents = require("../../models/accounting/auth/accFirstYear");
const secondYearStudents = require("../../models/accounting/auth/accSecondYear");
const thirdYearStudents = require("../../models/accounting/auth/accThirdYear");
const fourthYearStudents = require("../../models/accounting/auth/accFourthYear");

const { validateAcademicYear } = require("../../middlewares/validate");
const { validateLogin: validate } = require('../../common/validate');

router.post("/:year", validateAcademicYear, async (req, res) => {

  const { error } = validate(_.pick(req.body, ['id', 'name']));


  if (!_.isEmpty(error)) return res.status(400).send(error.details[0].message);

  let token;

  switch (parseInt(req.params.year)) {
    case 1:
      const firstYearStudent = await firstYearStudents.find({ studentId: req.body.id });

      if (_.isEmpty(firstYearStudent)) return res.status(404).send("Id cannot be found");

      if (!firstYearStudent[0].name == req.body.name) return res.status(404).send("Name cannot be found.");

      token = firstYearStudent[0].generateAuthToken();

      res.send(token);

      break;

    case 2:
      const secondYearStudent = await secondYearStudents.find({ studentId: req.body.id });

      if (_.isEmpty(secondYearStudent)) return res.status(404).send("Id cannot be found");

      if (!secondYearStudent.name == req.body.name) return res.status(404).send("Name cannot be found.");

      token = secondYearStudent[0].generateAuthToken();

      res.send(token);

      break;

    case 3:
      const thirdYearStudent = await thirdYearStudents.find({ studentId: req.body.id });

      if (_.isEmpty(thirdYearStudent)) return res.status(404).send("Id cannot be found");

      if (thirdYearStudent[0].name != req.body.name) return res.status(404).send("Name cannot be found.");

      token = thirdYearStudent[0].generateAuthToken();

      res.send(token);

      break;

    case 4:
      const fourthYearStudent = await fourthYearStudents.find({ studentId: req.body.id });

      if (_.isEmpty(fourthYearStudent)) return res.status(404).send("Id cannot be found");

      if (fourthYearStudent[0].name != req.body.name)
        return res.status(404).send("Name cannot be found.");

      token = fourthYearStudent[0].generateAuthToken()

      res.send(token);
      break;

    default:
      res.send('Edge case')
  }

});

module.exports = router;
