// ACTION TYPES

const PETS_FETCH = 'PETS_FETCH'
const PETS_CREATE = 'PETS_CREATE'
const PETS_UPDATE = 'PETS_UPDATE'
const PETS_DELETE = 'PETS_DELETE'

// INITIAL STATE

const initialState = {}

// ACTION CREATORS

const fetchPets = pets => ({
  type: PETS_FETCH,
  pets
})
const createPet = pet => ({ type: PETS_CREATE })
const updatePet = pet => ({ type: PETS_UPDATE })
const deletePet = id => ({ type: PETS_DELETE })

// THUNK CREATORS

export const getPets = text => {
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

// REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.botResponse
    case RESET_COMMAND:
      return { ...state, command: null }
    case RESET_MOOD:
      return { ...state, mood: null }
    default:
      return state
  }
}
