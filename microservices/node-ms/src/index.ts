//Importing project dependancies that we installed earlier
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' 
import helmet from 'helmet'
import apiController from './controller/api-controller';
import healthController from'./controller/health-controller';

//App Varaibles 
dotenv.config()

//intializing the express app 
const app = express(); 




//using the dependancies
app.use(helmet()); 
app.use(cors()); 
app.use(express.json())

app.use('/api', apiController);
app.use('/actuator', healthController);

//exporting app
module.exports = app