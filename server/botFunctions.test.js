// try {
//   require('./secrets.js')
// } catch (err) {
//   console.log('Secrets file not found.')
// }
//
// const { expect } = require('chai')
// const {
//   analyzeTone,
//   sendMessage,
//   combinedBotFunction
// } = require('./botFunctions')
//
// describe('Bot Functions', () => {
//   describe('analyzeTone', () => {
//     it('analyzes the tone of text with no mood', async () => {
//       const output = await analyzeTone('hi')
//       expect(output.length).to.be.equal(0)
//     })
//     it('analyzes the tone of joyful text', async () => {
//       const output = await analyzeTone('I am so joyful!')
//       expect(output[0].tone_name).to.be.equal('Joy')
//     })
//   })
//   describe('sendMessage', () => {
//     it('returns an object', async () => {
//       const output = await sendMessage('hi')
//       expect(output).to.be.an('object')
//     })
//     it('includes chatbot response', async () => {
//       const response = await sendMessage('hi')
//       expect(response.output.text[0].length).to.be.above(0)
//     })
//   })
//   describe('combinedBotFunction', () => {
//     it('returns an object', async () => {
//       const output = await combinedBotFunction('hi')
//       expect(output).to.be.an('object')
//     })
//     it('returns mood', async () => {
//       const output = await combinedBotFunction('I am so furious!!!')
//       expect(output.mood).to.be.equal('anger')
//     })
//     it('returns chatbot response', async () => {
//       const output = await combinedBotFunction('hi')
//       expect(output.botText.length).to.be.above(0)
//     })
//     it('returns context object', async () => {
//       const output = await combinedBotFunction('hi')
//       expect(output.context).to.be.an('object')
//     })
//     it('returns a command when appropriate', async () => {
//       const output = await combinedBotFunction('speak!')
//       expect(output.command).to.be.equal('speak')
//     })
//   })
// })
