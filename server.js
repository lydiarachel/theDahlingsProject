const app = require('express')()
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('dotenv').config({
    path: './config/.env'
})

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


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
  }

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// handle auth routes
app.use('/auth', authRoutes)
// handle api routes
app.use('/', apiRoutes)

app.listen(PORT, err => {
    if (err) throw Error(err)
    console.log(`Listening on ${PORT}`)
})

