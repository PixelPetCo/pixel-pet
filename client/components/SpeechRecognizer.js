import React, { Component } from 'react'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import Chip from 'material-ui/Chip'
import SvgIconMic from 'material-ui/svg-icons/av/mic'
import SvgIconMicRecord from 'material-ui/svg-icons/action/settings-voice'

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
    if (window.webkitSpeechRecognition === undefined) this.handleError('upgrade')
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
      let interimTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          this.setState({
            transcript: (event.results[i][0].transcript)
          })
        }
        else {
          interimTranscript += event.results[i][0].transcript
          this.setState({
            transcript: (interimTranscript)
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
    const { disableBtn } = this.props

    return (
      <div>
        <div id="speech-text" />
        {infoText.length > 0 && infoText}
        {listening && <Chip style={styles}>{transcript}</Chip>}
        <FloatingActionButton
          onClick={this.handleClick}
          style={style2}
          disabled={disableBtn}
        >
          {listening ? <SvgIconMicRecord /> : <SvgIconMic color="#FFF" />}
        </FloatingActionButton>
      </div>
    )
  }
}

export default SpeechRecognizer
