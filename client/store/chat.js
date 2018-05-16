// ACTION TYPES

const SEND_MESSAGE = 'SEND_MESSAGE'
const RESET_COMMAND = 'RESET_COMMAND'
const RESET_MOOD = 'RESET_MOOD'
const RESET_BOT = 'RESET_BOT'

// INITIAL STATE

const initialState = { botText: '', mood: null, command: null, context: null, tooltip: null }

// ACTION CREATORS

export const sendMessageAction = botResponse => ({
  type: SEND_MESSAGE,
  botResponse
})
export const resetCommandAction = () => ({ type: RESET_COMMAND })
export const resetMoodAction = () => ({ type: RESET_MOOD })
export const resetBot = () => ({ type: RESET_BOT })

// THUNK CREATORS

export const sendMessage = text => {
  return async (dispatch, getState, { axios }) => {
    try {
      const state = getState()
      const res = await axios.post('/bot', { text, state })
      const botResponse = res.data
      dispatch(sendMessageAction(botResponse))
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
  return async (dispatch, getState, { axios }) => {
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
