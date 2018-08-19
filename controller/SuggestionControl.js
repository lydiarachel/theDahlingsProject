// Handle flow of data for all interactions with `Suggestion`

const mongoose = require('mongoose')
const { Suggestion, User } = require('../db').Models

/**
 * Add a new suggestion to database
 * @param {Object} new_suggestion must have properties `suggestion` and `author`
 * @returns {Promise} 
 */
exports.create = new_suggestion => {
    console.log(`control ${new_suggestion}`)
    return Suggestion.create(new_suggestion).then(dbSuggestion => {
        return User.findOneAndUpdate(
          { _id: new_suggestion.author },
          { $push: { gists: dbSuggestion._id } },
          { new: true }
        );
       
      });
}

/** 
 * Find all suggestions in database
 * @returns {Promise}
 */
exports.findAll = () => {
    return Suggestion.find()
    .populate("author", "name")
}
exports.findOneAndUpdate = params =>{
    return Suggestion.findOneAndUpdate({_id: params._id}, {$set:{liked: params.liked}}) 
 }