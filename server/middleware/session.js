const router = require('express').Router()
const passport = require('passport')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const { db, User } = require('../db')
const sessionStore = new SequelizeStore({ db })
module.exports = router

// Session middleware
router.use(
  session({
    secret: process.env.SESSION_SECRET || 'This is not a very secure secret...',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
)

// consumes 'req.session' so that passport can know what's on the session
router.use(passport.initialize())

// this will invoke our registered 'deserializeUser' method
// and attempt to put our user on 'req.user'
router.use(passport.session())

// after we find or create a user, we 'serialize' our user on the session
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// If we've serialized the user on our session with an id, we look it up here
// and attach it as 'req.user'.
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})
