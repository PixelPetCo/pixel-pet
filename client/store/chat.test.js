// import { expect } from 'chai'
// import { sendMessage } from './chat'
// import { mockStore } from './testConfig'
//
// describe('thunk creators', () => {
//   let store
//   const initialState = { botText: '', mood: null, command: null, context: null }
//
//   beforeEach(() => {
//     store = mockStore(initialState)
//   })
//
//   describe('sendMessage', () => {
//     it('dispatches the SEND MESSAGE action', async () => {
//       await store.dispatch(sendMessage())
//       const [getAction] = store.getActions()
//       expect(getAction.type).to.be.equal('SEND_MESSAGE')
//     })
//     it('changes the state appropriately', async () => {
//       await store.dispatch(sendMessage('I am so joyful!'))
//       const state = store.getState()
//       expect(state.mood).to.be.equal('joy')
//     })
//   })
// })
