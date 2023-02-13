// external imports
import express from 'express'
import cors from 'cors'

// internal imports
import { db } from './db.js'
import userRoutes from './routes/userRoutes.js'
import climbRoutes from './routes/climbRoutes.js'

// -------------
// initialize app and server
// ------------- 
const app = express()
const PORT = process.env.PORT | 5000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

db()

// -------------
// middleware
// -------------
app.use(express.json())
app.use(cors())

// -------------
// ROUTES
// -------------
app.use("/user", userRoutes)
app.use("/climb", climbRoutes)