import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from 'helmet'

dotenv.config()

const app = express()

app.use(cors({
    origin: '*'
}))
app.use(helmet())

mongoose.connect(process.env.MONGO_URI ?? '')