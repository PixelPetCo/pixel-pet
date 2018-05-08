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
      speech: '',
      showSpeech: false
    }
  }
  handleClick = () => {
    this.setState({ showSpeech: true })
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = true
    recognition.maxAlternatives = 1
    recognition.start()
    recognition.onresult = event => {
      // console.log('transcript  ', event.results[0][0].transcript)
      // console.log(event.results)
      this.setState({
        speech: event.results[0][0].transcript
      })
    }
    recognition.onend = function() {
      console.log('Speech recognition service disconnected')
    }
    this.setState({ showSpeech: false })
    // recognition.onspeechend = function() {
    //   recognition.stop();
    // }
  }

  render() {
    return (
      <div>
        <div id="speech-text">
          {this.state.showSpeech && (
            <Chip
              style={styles.chip}
            >
              <Avatar color="#444" icon={<SvgIconFace />} />
              {this.state.speech}
            </Chip>
          )}
        </div>
          <FloatingActionButton
            onClick={this.handleClick}
            // secondary={true}
            style={style2}
          >
            <SvgIconMic color="#fff" />
          </FloatingActionButton>
      </div>
    )
  }
}

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
  }
}

const style2 = {
  position: 'absolute',
  right: '5%',
  bottom: '5%'
}

export default SpeechDisplay
