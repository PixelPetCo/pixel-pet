const router = require('express').Router()
const { combinedBotFunction } = require('../../botFunctions')
module.exports = router

// GET /bot

router.post('/', async (req, res, next) => {
  const { text, state } = req.body
  const personality = state.user.petPersonality
  const username = state.user.name || 'human'
  const petname = state.user.petName
  const context = { ...state.chat.context, petname, username }
  const newState = await combinedBotFunction(text, context, personality)
  res.send(newState)
})
