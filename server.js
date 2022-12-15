require('dotenv').config()

// express
const express = require('express')
const app = express()

// external packages
const cors = require('cors')
const morgan = require('morgan')

// route
const trackingRoutes = require('./routes/trackingRoutes')

// usign external packages
app.use(express.json())
app.use(cors({allowedHeaders: '"Access-Control-Allow-Origin"'}))
app.use(morgan('dev'))

app.use('/api/v1/tracking', trackingRoutes)

app.get('/', async (req, res) => {
    res.send('testing route')
})


// server startup
app.listen(process.env.PORT || 3001, () => {
    console.log('SERVER RUNNING GOOD')
})