const Employee = require('../models/EmpModel')

exports.createEmployee = async (req,res)=>{
    try{
        const {empid,empname} = req.body;
        const newEmployee = new Employee({empid,empname});
        const savedEmp = await newEmployee.save();
        res.status(201).json(savedEmp);
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}

exports.getEmployees = async (req,res)=>{
    try{
        const employees = await Employee.find({})
        res.status(200).json(employees);
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}

exports.editEmployees = async (req,res)=>{
    try{
        const e_id = req.params.id;
        const {empid,empname}=req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(e_id,{empid,empname},{new:true})
        if(!updatedEmployee){
            return res.status(404).json({message : 'Employee not found'})
        }
        res.status(200).json(updatedEmployee);
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}
    
exports.deleteEmployees = async (req,res)=>{
    try{
        const delete_id = req.params.id;
        const deleteEmployees = await Employee.findByIdAndDelete({_id:delete_id})
        if(!deleteEmployees){
            return res.status(404).json({message : 'Employee not found'})
        }
        res.status(203).json({message : 'Deleted Successfully'})
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}