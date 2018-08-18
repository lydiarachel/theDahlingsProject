// Handle flow of data for all interactions with `comment`

const mongoose = require("mongoose");
const { Comment, User, Gist } = require("../db").Models;
/**
 * Add new comment to database
 * @param {Object} new_comment
 * @returns {Promise}
 */
exports.create = new_comment => {
    console.log(new_comment)
  return Comment.create(new_comment).then(dbComment => {
  
      const updateUser = User.findOneAndUpdate(
        { _id: new_comment.author },
        { $push: { comments: dbComment._id } },
        { new: true }
      )
    
      const updateGist = Gist.findOneAndUpdate(
        { _id: new_comment.gistId },
        { $push: { comments: dbComment._id } },
        { new: true }
      )
   return Promise.all([updateGist, updateUser]).then(() =>{
       return 'success'
   })
  });
};

/**
 * Find all comments in database
 * @returns {Promise}
 */
exports.find = params => {
  return Comment.find(params).populate("author", "name");
};
