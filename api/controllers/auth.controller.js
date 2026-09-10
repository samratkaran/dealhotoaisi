import User from "../models/user.model.js"
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next)=>{

    const {username,email,password} = req.body
    const hashedPassword = bcrypt.hashSync(password,10) 
    const newUser = User({username,email,password:hashedPassword})
   try {
    await newUser.save()
    res.status(201).json("user created successfully!")
   } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue || {})[0]
      if (field === 'username') {
        return next(errorHandler(409, 'Username already exists'))
      }
      if (field === 'email') {
        return next(errorHandler(409, 'Email already exists'))
      }
      return next(errorHandler(409, 'User already exists'))
    }
    next(error)
   }
}