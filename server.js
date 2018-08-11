const app = require('express')()
const bodyParser = require('body-parser')

// import api routing function
const { handleRequest } = require('./routes/routing')

const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}))

handleRequest(app)

app.listen(PORT, err => {
    if (err) throw Error(err)
    console.log(`Listening on ${PORT}`)
})

