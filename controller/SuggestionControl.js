// Handle flow of data for all interactions with `Suggestion`

const mongoose = require('mongoose')
const { Suggestion } = require('../db').Models

/**
 * Add a new suggestion to database
 * @param {Object} new_suggestion must have properties `suggestion` and `author`
 * @returns {Promise} 
 */
exports.create = new_suggestion => {
    return Suggestion.create(new_suggestion)
}

/** 
 * Find all suggestions in database
 * @returns {Promise}
 */
exports.findAll = () => {
    return Suggestion.find()
}