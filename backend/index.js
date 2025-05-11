import express from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";

dotenv.config()

const app = express()
const PORT = 3000

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MONNOGDB suucessfully connected!"))
.catch((error)=>{
    console.log("MongoDB ERROR" , error)
})
app.listen(PORT , ()=>console.log(`Server is running on ${PORT}`))