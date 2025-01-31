const express =require('express')
const {createEmployee, getEmployees, deleteEmployees, editEmployees}=require('../controllers/EmpController')
const router = express.Router()


router.post('/',createEmployee)
router.get('/',getEmployees)
router.put('/:id',editEmployees)
router.delete('/:id',deleteEmployees)
module.exports = router