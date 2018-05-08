import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

class SpeechDisplay extends Component {
  constructor() {
    super()
    this.state = {
      speech: ''
    }
  }
  handleClick = () => {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = true
    recognition.maxAlternatives = 1
    recognition.start()
    recognition.onresult = event => {
      console.log('transcript  ', event.results[0][0].transcript)
      console.log(event.results)
      this.setState({
        speech: event.results[0][0].transcript
      })
    }
    recognition.onend = function() {
      console.log('Speech recognition service disconnected')
    }
    // recognition.onspeechend = function() {
    //   recognition.stop();
    // }
  }

  render() {
    return (
      <div>
        <h1>Web Speech API Demonstration</h1>
        <div id="speech-text">
          <button onClick={this.handleClick}>Record</button>
          {this.state.speech}
        </div>
      </div>
    )
  }
}
export default SpeechDisplay
