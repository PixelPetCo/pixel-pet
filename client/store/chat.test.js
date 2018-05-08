import { expect } from 'chai'
import { sendMessage, resetCommandAction } from './chat'
import { mockStore } from './testConfig'

describe('thunk creators', () => {
  let store
  const initialState = { botText: '', mood: null, command: null, context: null }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  // describe('sendMessage', () => {
  //   it('dispatches the SEND MESSAGE action', async () => {
  //     await store.dispatch(sendMessage())
  //     const [getAction] = store.getActions()
  //     expect(getAction.type).to.be.equal('SEND_MESSAGE')
  //   })
  // })
  describe('resetCommandAction', () => {
    it('dispatches the RESET COMMAND action', async () => {
      await store.dispatch(resetCommandAction())
      const [getAction] = store.getActions()
      expect(getAction.type).to.be.equal('RESET_COMMAND')
    })
  })
})
