import express from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config()

const app = express()
//to make input as  json
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin : "*"}))

const PORT = 3000

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MONNOGDB suucessfully connected!"))
.catch((error)=>{
    console.log("MongoDB ERROR" , error)
})
app.listen(PORT , ()=>console.log(`Server is running on ${PORT}`))

// import Routes
import authRouter from "./routes/auth.route.js"
app.use("/api/auth" , authRouter)

// error handling
app.use((err , req , res , next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    })
})

