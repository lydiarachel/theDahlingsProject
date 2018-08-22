const router = require('express').Router()
const passport = require('passport')
const control = require('../controller')

// auth logout
router.get('/logout', (req, res) => {
    req.logOut()
    res.json(req.user)
    })

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('http://localhost:3000/')
})

// register new user with username and password
router.post('/register', (req, res) => {
    const new_user = req.body
    control.User.registerFromLocalAuth(new_user)
        .then(success => {
            if (!success) {
                res.send('Username already taken')
            } else {
                res.redirect('/auth')
            }
        })
        
})

// authenticate with Local strategy
router.post('/local',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth' 
    }),
    (req, res) => res.redirect('/')
)

module.exports = router