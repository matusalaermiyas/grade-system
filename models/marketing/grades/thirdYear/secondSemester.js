const mongoose = require('mongoose');

const gradeSchema = require('../../../../common/gradeSchema');

const model = mongoose.model('mktthirdyearsecondsemestergrade', new mongoose.Schema(gradeSchema));

module.exports = model;