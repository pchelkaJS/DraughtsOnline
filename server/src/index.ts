import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from 'helmet'
import router from './routes/api'

dotenv.config()

const app = express()

app.use(cors({
    origin: '*'
}))
app.use(helmet())
app.use("/api", router)

mongoose.connect(process.env.MONGO_URI ?? '')