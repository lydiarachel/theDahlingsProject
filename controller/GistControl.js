// Handle flow of data for all interactions with `User`

const mongoose = require("mongoose");
const { Gist, User} = require("../db").Models;

/**
 * Add new gist to database
 * @param {Object} new_gist
 * @returns {Promise}
 */
exports.create = new_gist => {
    console.log(new_gist)
  return Gist.create(new_gist).then(dbGist => {
    return User.findOneAndUpdate(
      { _id: new_gist.author },
      { $push: { gists: dbGist._id } },
      { new: true }
    );
   
  });
};

/**
 * Provide parameters to limit search
 * If no params are given all documents in `Gist` db collection will be returned
 * @param {Object} params Optional parameters to limit search
 */
exports.find = params => {
  return Gist.find(params)
    .populate("author", "name")
    .populate({path: "comments", populate: {path: 'author', select: 'name'}});
};
exports.findOneAndUpdate = params =>{
    return Gist.findOneAndUpdate(params) 
 }
 