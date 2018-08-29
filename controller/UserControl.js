// Handle flow of data for all interactions with `User`

const mongoose = require('mongoose')
const { User } = require('../db').Models
const bcrypt = require('bcryptjs')

//  Add new user to database
exports.create = new_user => {
    return User.create(new_user)
}

/**
 * controller function to find users in database
 * if no params are given it will return all user documents in `users` collection
 * @param {Object} params 
 */
exports.find = params =>{
    return User.find(params)
    .populate('comments', 'comment')
    .populate('suggestions', 'suggestion')
    .populate('gists', 'gist')
}

exports.findOneAndUpdate = (match_id, updates) =>{
    const userObjId = mongoose.Types.ObjectId(match_id)
    updates._id = userObjId
   return User.findOneAndUpdate({_id: userObjId}, updates, {new:true}) 
}

exports.getUserByEmail = (email, cb) => {
    User.findOne({ email }, cb)
}

exports.comparePassword = (candidatePassword, hash, cb) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err
        cb(null, isMatch)
    })
}

exports.registerUser = (new_user, cb) => {
    const really_new_user = new User(new_user)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(really_new_user.password, salt, (err, hash) => {
            really_new_user.password = hash
            really_new_user.save(cb)
        })
    })
}

// exports.registerFromLocalAuth(req_new_user => {
//     User.findOne({ name: {
//         $regex: `^${req_new_user.name}\\b`,
//         $options: 'i'
//     }}).then(user => {
//         if (user) {
//             return false
//         } else {
//             const new_user = new User(req_new_user)
//             return 
//         }
//     })
// })


