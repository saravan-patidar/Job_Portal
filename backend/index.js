import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'

import userRoute from './routes/user.routes.js';
import companyroute from './routes/company.routes.js';
import jobRoute from './routes/job.routes.js';
import applicationRoute from './routes/job.routes.js';

dotenv.config({});

const app =express();

app.use(express.json());
app.use(urlencoded({extended:true}))
const corsOption={
    origin:'http://localhost:5173',
    credential:true,
}
app.use(cors(corsOption));
app.use(cookieParser());

app.use('/api/v1/user',userRoute);
app.use('/api/v1/company',companyroute);
app.use('/api/v1/job',jobRoute);
app.use('/api/v1/application',applicationRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
