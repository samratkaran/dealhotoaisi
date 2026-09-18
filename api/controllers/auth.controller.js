import User from "../models/user.model.js"
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res,next)=>{

    const {username,email,password, number} = req.body
    const hashedPassword = bcrypt.hashSync(password,10) 
    const newUser = User({username,email,number,password:hashedPassword})
   try {
    await newUser.save()
    res.status(201).json("user created successfully!")
   } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue || {})[0]
      if (field === 'username') {
        return next(errorHandler(409, 'Username already exists'))
      }
      if (field === 'Number') {
        return next(errorHandler(409, 'Number already exists'))
      }
      if (field === 'email') {
        return next(errorHandler(409, 'Email already exists'))
      }
      return next(errorHandler(409, 'User already exists'))
    }
    next(error)
   }
}

export const signin = async (req, res,next)=>{
  const { loginBy, password } = req.body;
  console.log("loginBy:", JSON.stringify(loginBy));
  
  try {
    const ValidUser = await User.findOne({
      $or: [
        { email: loginBy },
        { number: loginBy }
      ]
    });
    console.log("ValidUser:", ValidUser);
    // here we can also just add email cause after ES6 if value and key are same we can just add the key
    if(!ValidUser) return next(errorHandler(404, 'User not Found'))
      const ValidPassword = bcrypt.compareSync(password, ValidUser.password)
    if(!ValidPassword) return next(errorHandler(420,'Wrong Credentials!'))
      const token  = jwt.sign({id:ValidUser._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
    const {password:localPass, ...rest} = ValidUser._doc
    res.cookie('access_token', token, {httpOnly: true}).status(200).json({rest})



  } catch (error) {
    console.log("SIGNIN ERROR:", error);
    next(error)
  }
}