import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        requried: true,
        unique:true,
    },
    password:{
        type:String,
        requried: true,
        select:false,

    },
    createdAt:{
        type:Date,
        default:Date.now,
        
    }
})

export const User= mongoose.model("User",schema);