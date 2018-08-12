// Handle all http requests for api calls
//  - all html routing handled by react-router-dom
const router = require('express').Router()
const path = require("path");

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
    // to-do: save new user to db with controller function
    control.User.create(new_user)
        .then(data =>{
            res.send(data)
        })
})

// Create new Gist
router.post('/gist/create', (req, res, next) => {
    const new_gist = req.body
    // to-do: save new Gist to db with controller function
    res.sendStatus(200)
})

// Create new Comment
router.post('/comment/create', (req, res, next) => {
    const new_comment = req.body
    // to-do: save new Gist to db with controller function
    res.sendStatus(200)
})

// Create new Suggestion
router.post('/suggestion/create', (req, res, next) => {
    const new_suggestion = req.body
    // to-do: save new Gist to db with controller function
    res.sendStatus(200)
})

// END POST ROUTES
// ================================================

// START GET ROUTES
// ================================================

// Get single User (will return fully populated User)
router.get('/user:user_id', (req, res, next) => {
    const user_id = req.params.user_id
    // to-do: find user by id in db with controller function
    control.User.find(user_id)
        .then(data =>{
            if (data){
                res.json(data)
            } else {
                res.sendStatus(404).json({
                    message: 'User not found'
                })
            }
        })
        .catch(err =>{
            res.sendStatus(500).json({
                Error: err,
                message: 'Internal server error'
            })
        })
})

// Get single Gist (will return fully populated Gist)
router.get('/gist:gist_id', (req, res, next) => {
    const gist_id = req.params.gist_id
    // to-do: find gist by id in db with controller function
    res.send(gist_id)
})

// Search for Gists with client provided parameters
router.get('/gist/multi', (req, res, next) => {
    const search_params = req.body
    // to-do: search for gists with parameters in db with controller function
    res.sendStatus(200)
})

// Search for Gists by category
router.get('/gist/multi:category', (req, res, next) => {
    const category = req.params.category
    // to-do: search for gists by category in db with controller function
    res.send(category)
})

// Get suggestions
router.get('/suggestion/multi', (req, res, next) => {
    // to-do: get all suggestions in db with controller function
    res.sendStatus(200)
})

// END GET ROUTES
// ================================================
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


module.exports = {
    router
}