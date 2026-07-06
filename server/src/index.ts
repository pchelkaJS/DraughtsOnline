import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from 'helmet'
<<<<<<< HEAD
import router from './routes/api'
=======
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
>>>>>>> db62292bee5cb682eb136db5561bf9f3c4961789

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(cors({
    origin: process.env.CLIENT_URL ?? []
}))
app.use(helmet())
<<<<<<< HEAD
app.use("/api", router)
=======
app.use(cookieParser())

app.listen(process.env.PORT ?? 3000, () => {
    console.log('Server started')
})
>>>>>>> db62292bee5cb682eb136db5561bf9f3c4961789

mongoose.connect(process.env.MONGO_URI ?? '')