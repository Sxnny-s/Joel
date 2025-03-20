const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Router = require('./routes/carSales')
require('dotenv').config()
app.use(express.json())
app.use(cors())

const URL = process.env.URL
const PORT = process.env.PORT

mongoose.connect(URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.error('MongoDb connection error:', error))


    
app.use('/api/data', Router)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})