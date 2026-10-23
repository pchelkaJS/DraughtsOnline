import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(cors({
    origin: process.env.CLIENT_URL ?? []
}))
app.use(helmet())
app.use(cookieParser())

app.listen(process.env.PORT ?? 3000, () => {
    console.log('Server started')
})

mongoose.connect(process.env.MONGO_URI ?? '')