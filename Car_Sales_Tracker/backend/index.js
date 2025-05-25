const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Router = require('./routes/carSales')
const { requireAuth } = require('@clerk/express')
// const { ClerkExpressWithAuth } = require('@clerk/express')
require('dotenv').config()
app.use(express.json())
app.use(cors({
  origin: 'https://joel-zeta.vercel.app/',
  credentials: true 
}))
app.use(requireAuth())

const CLERK_PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY
const URL = process.env.URL
const PORT = process.env.PORT

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error('Clerk publishable key is missing from environment variables')
}

mongoose.connect(URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.error('MongoDb connection error:', error))
    
app.use('/api/data', Router)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})