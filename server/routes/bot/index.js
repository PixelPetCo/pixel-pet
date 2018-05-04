const router = require('express').Router()
const bot = require('../../botFunctions')
module.exports = router

// GET /bot

router.post('/', async (req, res, next) => {
  const { text, state } = req.body
  const context = state.context
  const newState = await bot(text, context)
  res.send(newState)
})
