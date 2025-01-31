import React, {useState, useEffect} from 'react';
import { fetchEmployees,createEmployee,deleteEmployee,editEmployee} from '../api/employeeApi';

const EmployeeList = ()=> {
    const [employees,setEmployees] = useState([]);
    const [empid,setEmpid]=useState("")
    const [empname,setEmpName]=useState("")
    const [editingEmployee,setEditingEmployee] = useState(null)
    useEffect(()=>{
        const loadEmployees = async () =>{
            const {data} = await fetchEmployees();
            setEmployees(data);
        }
        loadEmployees();
    },[])
    const insertEmployee = async()=>{
        const newEmployee={empid,empname};
        const {data} = await createEmployee(newEmployee)
        setEmployees([...employees,data])
        setEmpid("")
        setEmpName("")
    }
    const updateEmployee = async()=>{
        const updatedEmployee={empid,empname};
        const {data} = await editEmployee(editingEmployee._id,updatedEmployee)
        setEmployees(employees.map((emp)=>(emp._id === editingEmployee._id ? data : emp )))
        setEmpid("")
        setEmpName("")
        setEditingEmployee(null)
    }
    const editsEmployee = (emp)=>{
        setEditingEmployee(emp);
        setEmpid(emp.empid)
        setEmpName(emp.empname)
    }
    const handleDeleteEmployee = (id)=>{
        const delete_id = {id}
        employees.deleteOne({_id:delete_id})
    }
    return (
        <>
        { editingEmployee ? (
        <div>
            <input type='text' placeholder='Employee ID' value = {empid} onChange={(e)=>setEmpid(e.target.value)}/>
            <input type='text' placeholder='Employee Name' value = {empname} onChange={(e)=>setEmpName(e.target.value)}/>
            <button onClick={updateEmployee}>Save Changes</button>
            {/*<button onClick={handleCancelEdit}>Cancel Edit</button>*/}
        </div> ) : (
        <div>
            <input type='text' placeholder='Employee ID' onChange={(e)=>setEmpid(e.target.value)}/>
            <input type='text' placeholder='Employee Name' onChange={(e)=>setEmpName(e.target.value)}/>
            <button onClick={insertEmployee}>Add Employee</button>
        </div> )}
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map((emp)=>(
                    <li key={emp._id}> {emp.empid} - {emp.empname}{" "}
                        <button onClick={()=> handleDeleteEmployee(emp._id)}>Delete</button>
                        <button onClick={()=> editsEmployee(emp)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default EmployeeList;