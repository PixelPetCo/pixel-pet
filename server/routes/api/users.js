const router = require('express').Router()
const {User} = require('../../db')
module.exports = router

// GET /api/users
// Hm...should everyone really be able to get these...?
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id }
    })
    if (user) {
      const updatedUser = await user.update(req.body)
      res.json(updatedUser)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})
