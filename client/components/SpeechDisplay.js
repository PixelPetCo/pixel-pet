import React, { Component } from 'react'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import SvgIconMic from 'material-ui/svg-icons/av/mic'
import SvgIconFace from 'material-ui/svg-icons/action/face'
import { blue300, indigo900 } from 'material-ui/styles/colors'

class SpeechDisplay extends Component {
  constructor() {
    super()
    this.state = {
      transcript: '',
      recording: false,
      speechBg: blue300
    }
  }

  handleClick = () => {
    this.setState({ recording: true, speechBg: blue300 })
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = true
    recognition.maxAlternatives = 1
    recognition.start()
    recognition.onresult = event => {
      this.setState({
        transcript: event.results[0][0].transcript
      })
    }
    recognition.onend = function() {
      console.log('Speech recognition service disconnected')
    }
    this.setState({ speechBg: '#E0E0E0' })
  }

  render() {

    const { transcript, recording, speechBg } = this.state
    return (
      <div>
        <div id="speech-text" />
        {recording && (
          <Chip style={styles} backgroundColor={speechBg}>
            {/* <Avatar color="#444" icon={<SvgIconFace />} /> */}
            {transcript}
          </Chip>
        )}
        <FloatingActionButton onClick={this.handleClick} style={style2}>
          <SvgIconMic color="#FFF" />
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

export default SpeechDisplay
