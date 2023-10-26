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
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
    
}))

// Using Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);



app.get("/",(req,res)=>{
    res.send("Nice working")
})

app.get("/userid",async(req,res)=>{

    const {id} = req.body;
   const user = await User.findById(id)
    
    res.json({
        success:true,
        user,
    })
}) 

