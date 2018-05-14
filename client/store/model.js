// ACTION TYPES

const MODEL_SELECT = 'MODEL_SELECT'

// INITIAL STATE

const initialState = { name: 'cuboidCanine' }

// ACTION CREATORS

const switchModel = model => ({
  type: MODEL_SELECT,
  model
})

// THUNK CREATORS

export const selectModel = model => {
  return dispatch => {
    dispatch(switchModel({ name: model }))
  }
}

// REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case MODEL_SELECT:
      return action.model
    default:
      return state
  }
}
