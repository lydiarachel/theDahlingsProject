const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../db/Models').User

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

console.log(`\n${process.env.clientID}\n`)


passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        // check if user already exists in our own db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser)
                done(null, currentUser)
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    name: profile.displayName
                })
                .save()
                .then(newUser => {
                    console.log('created new user: ', newUser)
                    done(null, newUser)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        })
    })
)