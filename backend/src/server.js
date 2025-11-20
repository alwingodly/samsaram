import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import { connectDB } from "./config/db.js";
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5001
app.use("/api/auth" , authRoutes)
app.use("/api/message" , messageRoutes)

app.listen( 5001 , ()=>{
console.log(" Server running in port 5001")
connectDB()
})
