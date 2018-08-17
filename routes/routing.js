// Handle all http requests for api calls
//  - all html routing handled by react-router-dom
const router = require('express').Router()

const control = require('../controller')
require('../db/Connection')

// test route
router.get('/testRoute', (req, res, next) => {
    res.send('Success!')
})

// BEGIN POST ROUTES
// ================================================

// Create new User
router.post('/user/create', (req, res, next) => {
    const new_user = req.body
    // controller function to create new user with new_user object 
    control.User.create(new_user)
        .then(data =>{
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({
                    message: 'Unable to create user with provided input'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error',
                Error: err
            })
        })
})

// Create new Gist
router.post('/gist/create', (req, res, next) => {
    const new_gist = req.body
    // controller function to add new gist to database
    control.Gist.create(new_gist)
        .then(gist_in_db => {
            if (gist_in_db) {
                res.status(200).json(gist_in_db)
            } else {
                res.status(404).json({
                    message: 'Unable to save gist'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error',
                Error: err
            })
        })
})

// Create new Comment
router.post('/comment/create', (req, res, next) => {
    const new_comment = req.body
    // controller function to add new comment to database
    control.Comment.create(new_comment)
        .then(comment_in_database => {
            if (comment_in_database) {
                res.status(200).json(comment_in_database)
            } else {
                res.status(404).json({
                    message: 'Unable to create comment'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error saving comment',
                Error: err
            })
        })
})

// Create new Suggestion
router.post('/suggestion/create', (req, res, next) => {
    const new_suggestion = req.body
    // controller function to add a new suggestion to database
    control.Suggestion.create(new_suggestion)
        .then(suggestion_in_db =>{
            if (suggestion_in_db) {
                res.status(200).json(suggestion_in_db)
            } else {
                res.status(404).json({
                    message: 'Unable to create suggestion'
                })
            }
        })
        .catch(err =>{
            res.status(500).json({
                message: 'Internal server error',
                Error: err
            })
        })
})

// END POST ROUTES
// ================================================

// START GET ROUTES
// ================================================

// Gets all users
router.get('/user/find', (req, res, next) => {
    // Use controller function to find all users
    control.User.find()
        .then(users => {
            if (users) {
                res.status(200).json(users)
            }   else {
                res.status(404).json({
                    message: 'No users found in database'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error',
                Error: err
            })
        })
})



// Search for Gists with client provided parameters
// Example url `/gist/multi?category=art
router.get('/gist/find', (req, res, next) => {
    const search_params = req.query
    // controller function to search for gists
    control.Gist.find(search_params)
        .then(gists => {
            res.status(200).json(gists)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error',
                Error: err
            })
        })
})

// Search for comments using parameters provided by client
router.get('/comment/find', (req, res, next) => {
    const params = req.query
    // controller function to search for comments in database matching provided parameters
    control.Comment.find(params)
        .then(comments => {
            if (comments.length >= 0) {
                res.status(200).json(comments)
            } else {
                res.status(404).json({
                    message: 'No comments found',
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Database error',
                Error: err
            })
        })
})

// Get suggestions
router.get('/suggestion/find', (req, res, next) => {
    // controller function to get all suggestions from database
    control.Suggestion.findAll()
        .then(suggestions => {
            if (suggestions.length >= 0) {
                res.status(200).json(suggestions)
            } else {
                res.status(404).json({
                    message: 'No suggestions found in database'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error',
                Error: err
            })
        })
})

// END GET ROUTES
// ================================================

// CATCH ALL ROUTE
router.use('/*', (req, res, next) => {
    res.json({
        message: 'Route not found'
    })
})


module.exports = router