import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()





mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDB')
}).catch((err)=>{
    console.log("error in connecting to MongoDB", err)
    console.log('issue with mongoDB server')
})
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});