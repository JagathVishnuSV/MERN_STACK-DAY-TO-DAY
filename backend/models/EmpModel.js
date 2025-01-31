const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    empid:String,
    empname:String 
})

module.exports = mongoose.model('EmpModel',employeeSchema);