import { updateUser } from './user'

// PET COMMANDS

const commands = { speak: true, sit: true }

// INTENT AND ENTITY PAIRS

const pairs = { Fave_Food: 'food' }

// ACTION TYPES

const SEND_MESSAGE = 'SEND_MESSAGE'
const RESET_COMMAND = 'RESET_COMMAND'
const RESET_MOOD = 'RESET_MOOD'
const RESET_BOT = 'RESET_BOT'

// INITIAL STATE

const initialState = { botText: '', mood: null, command: null, context: null }

// ACTION CREATORS

const sendMessageAction = botResponse => ({
  type: SEND_MESSAGE,
  botResponse
})
export const resetCommandAction = () => ({ type: RESET_COMMAND })
export const resetMoodAction = () => ({ type: RESET_MOOD })
export const resetBot = () => ({ type: RESET_BOT })

// THUNK CREATORS

/* vv Temporarily increasing maximum function complexity because this thunk is a doozy. vv */
/*eslint complexity: ["error", 15]*/

export const sendMessage = text => {
  return async (dispatch, getState, { axios }) => {
    try {
      // GET DATA FROM WATSON
      const state = getState()
      const res = await axios.post('/bot', { text, state })
      const { toneAnalysis, response } = res.data

      // EXTRACT RELEVANT DATA
      const mood = toneAnalysis[0] ? toneAnalysis[0].tone_id : null
      const botText = response.output.text ? response.output.text[0] : ''
      const confidence = response.intents.length
        ? response.intents[0].confidence
        : 0
      const intent = confidence > 0.7 ? response.intents[0].intent : null
      const context = response.context || null
      const command = commands[intent] ? intent : null
      const botResponse = { botText, mood, command, context }

      // STORE ENTITIES IN DB, IF DETECTED
      const entity = response.entities[0] ? response.entities[0].entity : null
      if (pairs[intent] === entity) {
        dispatch(
          updateUser({
            ...state.user,
            faveFood: response.entities[0].value
          })
        )
      }

      // DISPATCH ACTION WITH EXTRACTED DATA
      dispatch(sendMessageAction(botResponse))

      // RESET STATE AFTER 6S TO STOP REPEATING ANIMATIONS
      setTimeout(() => {
        dispatch(resetCommandAction())
        dispatch(resetMoodAction())
      }, 6000)
    } catch (error) {
      console.error('Could not get bot response: ', error)
    }
  }
}

export const resetBotOnLogout = () => {
  return dispatch => {
    try {
      dispatch(resetBot())
    } catch (error) {
      console.error('Could not reset user context: ', error)
    }
  }
}

// REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.botResponse
    case RESET_COMMAND:
      return { ...state, command: null }
    case RESET_MOOD:
      return { ...state, mood: null }
    case RESET_BOT:
      return { ...state, botText: '', mood: null, command: null, context: null }
    default:
      return state
  }
}
