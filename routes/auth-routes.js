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
    scope: ['profile', 'email']
}))

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/')
})

// new user validation midleware
const userValidation = (req, res, next) => {
    const { password, password2 } = req.body

    if (password !== password2) {
        res.status(400).json({message: 'Passwords do not match'})
    } else {
        next()
    }
}

// register new user with username and password
router.post('/register', userValidation, (req, res) => {
    const new_user = req.body
    control.User.getUserByEmail(new_user.email, (err, user) => {
        if (err) throw err

        if (user) {
            res.send('Email address already taken.')
        } else {
            control.User.registerUser(new_user, (err, user) => {
                if (err) throw err
                
                passport.authenticate('local')
                (req, res, () => {
                    res.send(req.user);
                  });
            })
        }
    })  
})

// authenticate with Local strategy
router.post('/local',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth' 
    }),
    (req, res) => {
        console.log(req.user)
        res.send(req.user)
    }
)

module.exports = router