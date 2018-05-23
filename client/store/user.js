import { resetBotOnLogout } from './chat'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const EDIT_USER = 'EDIT_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })
const editUser = user => ({ type: EDIT_USER, user })

/**
 * THUNK CREATORS
 */
export const me = () => (dispatch, _, { axios }) =>
  axios
    .get('/auth')
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => console.log(err))

export const auth = (credentials, method) => (
  dispatch,
  _,
  { axios, history }
) =>
  axios[method](`/auth/local`, credentials)
    .then(
      res => {
        dispatch(getUser(res.data))
        history.push('/')
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError.response.data }))
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const logout = () => (dispatch, _, { axios, history }) =>
  axios
    .delete('/auth')
    .then(() => {
      dispatch(removeUser())
      dispatch(resetBotOnLogout())
      history.push('/')
    })
    .catch(err => console.log(err))

export const updateUser = user => async (dispatch, _, { axios, history }) => {
  const updatedUser = await axios
    .put(`/api/users/${user.id}`, user)
    .catch(err => console.log('Unable to update user. Error: ', err))
  dispatch(editUser(updatedUser.data))
  history.push('/')
}

/**
 * REDUCER
 */
export default (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case EDIT_USER:
      return action.user
    default:
      return state
  }
}
