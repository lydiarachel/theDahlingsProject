// Handle flow of data for all interactions with `User`

 const { User } = require('../db').Models

//  Add new user to database
exports.create = new_user => {
    return User.create(new_user)
        .then(user => user)
        .catch(err => err)
}

// Find single user from database
exports.find = user_id =>{
    return User.find()
}


