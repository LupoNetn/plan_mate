import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import userRouter from './routes/users.route.js'
import workspaceRouter from './routes/workspaces.route.js'

import dotenv from 'dotenv'
dotenv.config()



const app = express()
const PORT = Number(process.env.PORT) || 3000

//middlewares
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
//endpoint - http://localhost:8080/
app.use('/users', userRouter)
app.use('/workspaces', workspaceRouter)


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})