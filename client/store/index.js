import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import history from '../history'
import user from './user'
import chat from './chat'

const reducer = combineReducers({ user, chat })

const store = createStore(
  reducer,
  applyMiddleware(thunks.withExtraArgument({ axios, history }), logger)
)

export default store
