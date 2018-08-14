// Handle flow of data for all interactions with `User`

const mongoose = require('mongoose')
const { User } = require('../db').Models

//  Add new user to database
exports.create = new_user => {
    return User.create(new_user)
}

// Find single user from database
exports.find = user_id =>{
    const user_obj_id = mongoose.Types.ObjectId(user_id)
    return User.findById(user_obj_id)
}

// Find All users
exports.findAll = () => {
    return User.find()
}


