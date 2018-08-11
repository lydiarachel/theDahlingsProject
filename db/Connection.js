// Configure connection to database with Mongoose
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser: true
})

const connection = mongoose.connection

module.exports = connection