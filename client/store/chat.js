import engageBot from './botFunctions'

// ACTION TYPES

const SEND_MESSAGE = 'SEND_MESSAGE'
const RESET_COMMAND = 'RESET_COMMAND'

// INITIAL STATE

const initialState = { botText: '', mood: null, command: null, context: null }

// ACTION CREATORS

const sendMessageAction = botResponse => ({
  type: SEND_MESSAGE,
  botResponse
})
const resetCommandAction = command => ({ type: RESET_COMMAND, command })

// THUNK CREATORS

export const sendMessage = text => {
  return (dispatch, getState, _) => {
    try {
      const state = getState()
      const botResponse = engageBot(text, state.context)
      dispatch(sendMessageAction(botResponse))
    } catch (error) {
      console.error('Could not get bot response: ', error)
    }
  }
}

// REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.botResponse
    default:
      return state
  }
}
