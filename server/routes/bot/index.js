const router = require('express').Router()
const { combinedBotFunction } = require('../../botFunctions')
module.exports = router

// GET /bot

router.post('/', async (req, res, next) => {
  const { text, state } = req.body
  const context = state.context
  const newState = await combinedBotFunction(text, context)
  res.send(newState)
})
