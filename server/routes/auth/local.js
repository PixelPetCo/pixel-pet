const router = require('express').Router()
const { User } = require('../../db')
module.exports = router

// POST /auth/local
router.post('/', async (req, res, next) => {
  try {
    const [user] = await User.findOrCreate({
      where: {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
      }
    })
    if (user) {
      req.login(user, err => (err ? next(err) : res.json(user)))
    } else {
      const err = new Error('Incorrect email or password!')
      err.status = 401
      throw err
    }
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

// PUT /auth/local
router.put('/', async (req, res, next) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) {
      res.status(401).send('User not found')
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Incorrect password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})
