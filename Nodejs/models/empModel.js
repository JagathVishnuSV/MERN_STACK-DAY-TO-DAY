const mongose=require('mongoose')
const empSchema = new mongose.Schema({
    empid:Number,
    empname: String
})

const empmdl = mongose.model('employeeModel',empSchema)
module.exports=empmdl

