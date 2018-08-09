// Handle all http requests for api calls
//  - all html routing handled by react-router-DOM

exports.handleRequest = app => {
    // test route
    app.use('/testRoute', (req, res) => {
        res.send('Success!')
    })
}

