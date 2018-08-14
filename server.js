const app = require('express')()
const bodyParser = require('body-parser')

// import api routing function
const { router } = require('./routes/routing')


const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Use routes for api calls
app.use(router)

app.listen(PORT, err => {
    if (err) throw Error(err)
    console.log(`Listening on ${PORT}`)
})

