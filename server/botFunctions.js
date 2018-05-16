/*eslint-disable camelcase*/

const TONE_USERNAME = process.env.TONE_USERNAME
const TONE_PASSWORD = process.env.TONE_PASSWORD
const CONVERSATION_USERNAME = process.env.CONVERSATION_USERNAME
const CONVERSATION_PASSWORD = process.env.CONVERSATION_PASSWORD
const CHIPPER_ID = process.env.CHIPPER_CONVERSATION_WORKSPACE_ID
const GRUMPY_ID = process.env.GRUMPY_CONVERSATION_WORKSPACE_ID

// Tone Analyzer Imports

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')

// Conversation Imports

const AssistantV1 = require('watson-developer-cloud/assistant/v1')

// Tone Analyzer Setup

const toneAnalyzer = new ToneAnalyzerV3({
  username: TONE_USERNAME,
  password: TONE_PASSWORD,
  version_date: '2017-09-21',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
})

// Conversation Setup

const service = new AssistantV1({
  username: CONVERSATION_USERNAME,
  password: CONVERSATION_PASSWORD,
  version: '2018-02-16'
})

// Analyze Tone

const analyzeTone = str => {
  return new Promise((resolve, reject) => {
    toneAnalyzer.tone(
      { tone_input: str, content_type: 'text/plain' },
      (err, tone) => {
        if (err) {
          reject(err)
        } else {
          resolve(tone.document_tone.tones)
        }
      }
    )
  })
}

// Send Message to Bot

const sendMessage = (text, context, personality) => {
  const workspace = personality === 'chipper' ? CHIPPER_ID : GRUMPY_ID
  return new Promise((resolve, reject) => {
    service.message(
      {
        workspace_id: workspace,
        input: { text },
        context
      },
      (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      }
    )
  })
}

// Combined Tone and Chat

const combinedBotFunction = (
  text = '...',
  oldContext = null,
  personality = 'chipper'
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [toneAnalysis, response] = await Promise.all([
        analyzeTone(text),
        sendMessage(text, oldContext, personality)
      ])
      resolve({ toneAnalysis, response })
    } catch (error) {
      reject(error)
    }
  })
}

/*eslint-enable camelcase*/

module.exports = { combinedBotFunction, sendMessage, analyzeTone }
