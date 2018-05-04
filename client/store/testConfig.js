import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunks from 'redux-thunk'
import { createMemoryHistory } from 'history'

export const history = createMemoryHistory()
const middlewares = [thunks.withExtraArgument({ axios, history })]

export const mockStore = configureMockStore(middlewares)
export const mockAxios = new MockAdapter(axios)
