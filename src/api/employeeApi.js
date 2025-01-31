import axios from 'axios';
const API_URL = 'http://localhost:5000/api/employees';
export const fetchEmployees = async() => {
    try{
        const response = await axios.get(API_URL)
        return response;
    }
    catch(error){
        console.error('Error fetching employees: ', error);
        throw error;
    }
}

export const createEmployee = async (employeeData) => {
    try{
        const response = await axios.post(API_URL,employeeData)
        return response;
    }
    catch(err){
        console.error('Error creating employee: ',err)
        throw err;
    }
}


export const editEmployee = async (id,employeeData) => {
    try{
        const response = await axios.put(`${API_URL}/${id}`,employeeData)
        return response;
    }
    catch(err){
        console.error('Error creating employee: ',err)
        throw err;
    }
}