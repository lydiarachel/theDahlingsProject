const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const LocalStrategy = require('passport-local').Strategy
const User = require('../db/Models').User
const control = require('../controller')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

console.log(`\n${process.env.clientID}\n`)


// Configure passport with Google Strategy
passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile.emails)
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
                    name: profile.displayName,
                    email: profile.emails[0].value
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


// Configure passport to use Local Strategy
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email'
        },
        (email, password, done) => {
            // check to see if username already exists
            control.User.getUserByEmail(email, (err, user) => {
                if (err) throw err

                if (!user) {
                    console.log('unknown user')
                    return done(null, false, {message: 'Unknown user'})
                }

                control.User.comparePassword(password, user.password, (err, isMatch) => {
                    if (err) throw err

                    if (isMatch) {
                        return done(null, user)
                    } else {
                        console.log('invalid password')
                        return done(null, false, {message: 'Invalid password'})
                    }
                })
            })
        }
    )
)
