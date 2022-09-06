const mongoose = require('mongoose');

const gradeSchema = require('../../../../common/gradeSchema');

const model = mongoose.model('mktfourthyearthirdsemestergrade', new mongoose.Schema(gradeSchema));

module.exports = model;