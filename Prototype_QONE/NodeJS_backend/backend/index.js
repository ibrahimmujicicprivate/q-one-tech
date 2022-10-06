import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'

import project from './routes.js'

dotenv.config()

const app = express()

app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.json({"Hi":"Hello World"})
})
app.use(cors({origin: 'http://localhost:3000'}));
app.use('/api', project)

const PORT = 4999

app.listen(PORT, () => {
    console.log(`Port listening on ${PORT}`)
})

