const express = require('express')
const bodyParse = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./backend/configs/db')
const cors = require('cors')
const employeeRoutes = require('./backend/routes/Employee')
dotenv.config()

connectDB();
const app = express()
app.use(cors())
app.use(bodyParse.json());
app.use('/api/employees',employeeRoutes)


const PORT = process.env.PORT || 7000 || 8000;
app.listen(PORT , ()=> console.log(`Server running on port ${PORT}`));