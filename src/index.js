// src\index.js - (created by: logicinfo.com.br/ael)
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/router.js'



dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const port = process.env.PORT || 3001

app.listen(port, () => {

  console.log(`Server is running on port ${process.env.PORT}`)
  
})
