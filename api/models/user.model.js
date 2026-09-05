import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        min:3,
        max:30
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        
    },
    
},{timestamps: true})


 const User = mongoose.model('User', userSchema)

 export default User