import express from "express";
import  doetenv from "dotenv"
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
doetenv.config()

const app = express()
const port =process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)


app.listen(port,() =>{
    connectDb()
    console.log("server started")
})