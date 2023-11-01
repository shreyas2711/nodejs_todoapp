import express from 'express';
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import cors from "cors"



import {config} from "dotenv";
import cookieParser from 'cookie-parser';

export const app=express();


config({
    path:"./data/config.env",
});

const router=express.Router();


// Using Middlewares

const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: frontendURL,
    credentials: true, // Enable passing cookies and other credentials
  }));

// Using Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);



app.get("/",(req,res)=>{
    res.send("Nice working")
})




