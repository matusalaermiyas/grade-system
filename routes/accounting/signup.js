const router = require('express').Router();
const _ = require('lodash');

const firstYearStudents = require("../../models/accounting/auth/accFirstYear");
const secondYearStudents = require("../../models/accounting/auth/accSecondYear");
const thirdYearStudents = require("../../models/accounting/auth/accThirdYear");
const fourthYearStudents = require("../../models/accounting/auth/accFourthYear");

const { validateAcademicYear } = require('../../middlewares/validate');
const { validateRegistration: validate } = require('../../common/validate');


router.post('/:year', validateAcademicYear, async (req, res) => {

    const { error } = validate(_.pick(req.body, ['name', 'studentId', 'year', 'level']));

    if (!_.isEmpty(error)) return res.status(400).send(error.details[0].message);
    
    switch (req.params.year) {
        case 1:
            let firstYearStudent = new firstYearStudents({
                name: req.body.name,
                studentId: req.body.id,
                year: req.body.year,
                level: req.body.level
            });

            firstYearStudent = await firstYearStudent.save();

            console.log('Account created successfully ', firstYearStudent);

            res.send('Account created successfully, now you can login.')
            break;

        case 2:
            let secondYearStudent = new secondYearStudents({
                name: req.body.name,
                studentId: req.body.id,
                year: req.body.year,
                level: req.body.level
            });

            secondYearStudent = await secondYearStudent.save();

            console.log('Account created successfully ', secondYearStudent);

            res.send('Account created successfully')
            break;

        case 3:
            let thirdYearStudent = new thirdYearStudents({
                name: req.body.name,
                studentId: req.body.id,
                year: req.body.year,
                level: req.body.level
            });

            thirdYearStudent = await thirdYearStudent.save();

            console.log('Account created successfully ', thirdYearStudent);

            res.send('Account created successfully')
            break;
        case 4:
            let fourthYearStudent = new fourthYearStudents({
                name: req.body.name,
                studentId: req.body.id,
                year: req.body.year,
                level: req.body.level
            });

            fourthYearStudent = await fourthYearStudent.save();

            console.log('Account created successfully ', fourthYearStudent);

            res.send('Account created successfully')
            break;
    }


})

module.exports = router;