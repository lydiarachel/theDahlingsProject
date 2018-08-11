// Handle all http requests for api calls
//  - all html routing handled by react-router-DOM

const control = require('../controller')
require('../db/Connection')

exports.handleRequest = app => {
    // test route
    app.use('/testRoute', (req, res) => {
        res.send('Success!')
    })

    // BEGIN POST ROUTES
    // ================================================
    
    // Create new User
    app.use('/user/create', (req, res) => {
        const new_user = req.body
        // to-do: save new user to db with controller function
        control.User.create('stuff')
            .then(data =>{
                res.send(data)
            })
    })

    // Create new Gist
    app.use('/gist/create', (req, res) => {
        const new_gist = req.body
        // to-do: save new Gist to db with controller function
        res.sendStatus(200)
    })

    // Create new Comment
    app.use('/comment/create', (req, res) => {
        const new_comment = req.body
        // to-do: save new Gist to db with controller function
        res.sendStatus(200)
    })

    // Create new Suggestion
    app.use('/suggestion/create', (req, res) => {
        const new_suggestion = req.body
        // to-do: save new Gist to db with controller function
        res.sendStatus(200)
    })

    // END POST ROUTES
    // ================================================

    // START GET ROUTES
    // ================================================

    // Get single User (will return fully populated User)
    app.use('/user/get:user_id', (req, res) => {
        const user_id = req.params.user_id
        // to-do: find user by id in db with controller function
        control.User.find(user_id)
            .then(data => res.send(data))
    })

    // Get single Gist (will return fully populated Gist)
    app.use('/gist/get:gist_id', (req, res) => {
        const gist_id = req.params.gist_id
        // to-do: find gist by id in db with controller function
        res.send(gist_id)
    })

    // Search for Gists with client provided parameters
    app.use('/gist/multi/get', (req, res) => {
        const search_params = req.body
        // to-do: search for gists with parameters in db with controller function
        res.sendStatus(200)
    })

    // Search for Gists by category
    app.use('/gist/multi/get:category', (req, res) => {
        const category = req.params.category
        // to-do: search for gists by category in db with controller function
        res.send(category)
    })

    // Get suggestions
    app.use('/suggestion/multi/get', (req, res) => {
        // to-do: get all suggestions in db with controller function
        res.sendStatus(200)
    })
    
    // END GET ROUTES
    // ================================================
}

