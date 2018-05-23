/* eslint-env mocha,chai */

import { expect } from 'chai'
import { me, logout } from './user'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunks from 'redux-thunk'
import { createMemoryHistory } from 'history'

const history = createMemoryHistory()
const mockAxios = new MockAdapter(axios)
const middlewares = [thunks.withExtraArgument({ axios, history })]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  const initialState = { user: {} }

  beforeEach(() => {
    mockAxios.reset()
    store = mockStore(initialState)
  })

  describe('me', () => {
    it('eventually dispatches the GET USER action', async () => {
      const fakeUser = { email: 'Cody' }
      mockAxios.onGet('/auth').replyOnce(200, fakeUser)
      await store.dispatch(me())
      const [getUserAction] = store.getActions()
      expect(getUserAction.type).to.be.equal('GET_USER')
      expect(getUserAction.user).to.be.deep.equal(fakeUser)
    })
  })

  describe('logout', () => {
    it('logout: eventually dispatches the REMOVE_USER action', async () => {
      mockAxios.onDelete('/auth').replyOnce(204)
      await store.dispatch(logout())
      const [removeUserAction] = store.getActions()
      expect(removeUserAction.type).to.be.equal('REMOVE_USER')
      expect(history.location.pathname).to.be.equal('/')
    })
  })
})
