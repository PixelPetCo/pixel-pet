const router = require('express').Router()
const { combinedBotFunction } = require('../../botFunctions')
module.exports = router

// GET /bot

router.post('/', async (req, res, next) => {
  const { text, state } = req.body
  const context = state.chat.context
  const personality = state.user.petPersonality
  const newState = await combinedBotFunction(text, context, personality)
  res.send(newState)
})
