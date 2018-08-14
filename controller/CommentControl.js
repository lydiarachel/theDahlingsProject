// Handle flow of data for all interactions with `comment`

const mongoose = require('mongoose')
const { Comment } = require('../db').Models

/**
 * Add new comment to database
 * @param {Object} new_comment 
 * @returns {Promise}
 */
exports.create = new_comment => {
    return Comment.create(new_comment)
}

/**
 * Find all comments in database
 * @returns {Promise}
 */
exports.find = params => {
    return Comment.find(params)
}