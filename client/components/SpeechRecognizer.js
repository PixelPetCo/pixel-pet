import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../store/chat'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import SvgIconMic from 'material-ui/svg-icons/av/mic'
import SvgIconMicRecord from 'material-ui/svg-icons/action/settings-voice'
import SvgIconFace from 'material-ui/svg-icons/action/face'
import { blue300, indigo900 } from 'material-ui/styles/colors'

class SpeechRecognizer extends Component {
  constructor() {
    super()
    this.state = {
      transcript: '',
      listening: false,
      infoText: ''
    }
    this.recognition = new webkitSpeechRecognition()
    this.recognition.continuous = true
    this.recognition.interimResults = true
    this.recognition.lang = 'en-US'
  }

  handleClick = () => {
    if (window.webkitSpeechRecognition === undefined)
      this.handleError('upgrade')
    if (event.error == 'audio-capture') this.handleError('noMic')

    if (this.state.listening) {
      this.setState({ listening: false })
      this.recognition.stop()
      this.props.sendUserMessage(this.state.transcript)
    } else {
      this.setState({ listening: true })
      this.recognition.start()
      this.setState({ transcript: '' })
    }

    //On Result
    this.recognition.onresult = event => {
      let interim_transcript = ''
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          this.setState({
            transcript: (this.state.transcript +=
              event.results[i][0].transcript)
          })
        } else {
          interim_transcript += event.results[i][0].transcript
          this.setState({
            transcript: (this.state.transcript = interim_transcript)
          })
        }
      }
    }
  }

  handleError = errorType => {
    let errorMsg
    const upgrade =
      'Web Speech API is not supported by this browser. Please use Chrome version 25 or later.'
    const noMic =
      'No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly.'

    if (errorType === 'upgrade') errorMsg = upgrade
    if (errorType === 'noMic') errorMsg = noMic
    this.setState({
      infoText: errorMsg
    })
  }

  render() {
    const { transcript, listening, infoText } = this.state

    return (
      <div>
        <div id="speech-text" />
        {infoText.length > 0 && infoText}
        {listening && (
          <Chip style={styles}>
            {transcript}
          </Chip>
        )}
        <FloatingActionButton onClick={this.handleClick} style={style2}>
          {listening ? <SvgIconMicRecord /> : <SvgIconMic color="#FFF" />}
        </FloatingActionButton>
      </div>
    )
  }
}

const styles = {
  chip: {
    margin: 4
  },
  position: 'absolute',
  right: '12%',
  bottom: '6.5%'
}

const style2 = {
  position: 'absolute',
  right: '5%',
  bottom: '5%'
}

const mapDispatch = dispatch => ({
  sendUserMessage: msg => dispatch(sendMessage(msg))
})

export default connect(null, mapDispatch)(SpeechRecognizer)
