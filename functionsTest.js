const TONE_USERNAME =
  process.env.TONE_USERNAME || require('./server/secrets').TONE_USERNAME
const TONE_PASSWORD =
  process.env.TONE_PASSWORD || require('./server/secrets').TONE_PASSWORD
const CONVERSATION_USERNAME =
  process.env.CONVERSATION_USERNAME ||
  require('./server/secrets').CONVERSATION_USERNAME
const CONVERSATION_PASSWORD =
  process.env.CONVERSATION_PASSWORD ||
  require('./server/secrets').CONVERSATION_PASSWORD
const CONVERSATION_WORKSPACE_ID =
  process.env.CONVERSATION_WORKSPACE_ID ||
  require('./server/secrets').CONVERSATION_WORKSPACE_ID

// Tone Analyzer Imports

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')

// Conversation Imports

const AssistantV1 = require('watson-developer-cloud/assistant/v1')

// Possible Commands

const commands = ['love']

// Tone Analyzer Setup

const toneAnalyzer = new ToneAnalyzerV3({
  username: TONE_USERNAME,
  password: TONE_PASSWORD,
  version_date: '2017-09-21',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
})

// Conversation Setup

const service = new AssistantV1({
  username: CONVERSATION_USERNAME, // replace with service username
  password: CONVERSATION_PASSWORD, // replace with service password
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

const sendMessage = (text = '...', context) => {
  return new Promise((resolve, reject) => {
    service.message(
      {
        workspace_id: CONVERSATION_WORKSPACE_ID,
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

// Combine Tone and Chat

const testFunc = async (text = '...', oldContext = null) => {
  const toneAnalysis = await analyzeTone(text)
  const mood = toneAnalysis[0] ? toneAnalysis[0].tone_id : null

  const response = await sendMessage(text, oldContext)
  const botText = response.output.text ? response.output.text[0] : ''
  const confidence = response.intents.length
    ? response.intents[0].confidence
    : 0
  const intent = confidence > 0.7 ? response.intents[0].intent : null
  const context = response.context || null

  const command = commands.includes(intent) ? intent : null

  console.log({ botText, mood, command, context })
}

testFunc('I love you!')
