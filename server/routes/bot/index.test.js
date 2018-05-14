// /* eslint-env mocha,chai */
// try {
//   require('./secrets.js')
// } catch (err) {
//   console.log('Secrets file not found.')
// }
//
// const { expect } = require('chai')
// const request = require('supertest')
// const app = require('../../app')
//
// describe('Bot routes', () => {
//   describe('/bot', () => {
//     it('POSTs /bot', async () => {
//       await request(app)
//         .post('/bot')
//         .send({
//           text: 'hi',
//           state: { botText: '', mood: null, command: null, context: null }
//         })
//         .expect(200)
//     })
//   }) // end describe('/bot')
// }) // end describe('Bot routes')
