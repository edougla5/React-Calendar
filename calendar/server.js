const express = require('express')
const connectDB = require('./config/db')

const app = express();

// connect db
connectDB()

//init middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({msg: 'hey itss me'}))

const PORT = process.env.PORT || 5000