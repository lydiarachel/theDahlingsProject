const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const path = require('path')
require('dotenv').config({
    path: './config/.env'
})

const app = express()

// initialize passport
require('./config/passport-setup')

// import api routing function
const { apiRoutes, authRoutes } = require('./routes')

// configure port
const PORT = process.env.PORT || 8080

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey]
}))

// initialize passport
app.use(passport.initialize())
app.use(passport.session())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
  }
  
// handle auth routes
app.use('/auth', authRoutes)
// handle api routes
app.use('/', apiRoutes)

app.listen(PORT, err => {
    if (err) throw Error(err)
    console.log(`Listening on ${PORT}`)
})

