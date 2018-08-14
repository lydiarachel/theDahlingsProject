// Handle flow of data for all interactions with `User`

const mongoose = require('mongoose')
const { Gist } = require('../db').Models


/**
 * Add new gist to database
 * @param {Object} new_gist
 * @returns {Promise} 
 */
exports.create = new_gist => {
    return Gist.create(new_gist)
}


/**
 * Provide parameters to limit search
 * If no params are given all documents in `Gist` db collection will be returned
 * @param {Object} params Optional parameters to limit search
 */
exports.find = params => {
    return Gist.find(params)
}