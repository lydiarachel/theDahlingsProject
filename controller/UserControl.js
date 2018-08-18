// Handle flow of data for all interactions with `User`

const mongoose = require('mongoose')
const { User } = require('../db').Models

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

exports.findOneAndUpdate = params =>{
   return User.findOneAndUpdate(params) 
}


