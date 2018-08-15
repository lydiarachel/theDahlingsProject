// Configure connection to database with Mongoose
const mongoose = require('mongoose')

require('dotenv').config({path: './config/.env'})


mongoose.connect(process.env.MONGODB_URI || process.env.MLAB_DB_URI || 'mongodb://localhost:27017/test',{
    useNewUrlParser: true
}).then(() => {
    console.log('\nConnected to database')
})

const connection = mongoose.connection

module.exports = connection