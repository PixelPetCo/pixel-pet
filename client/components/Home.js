import React, { Component } from 'react'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import SvgIconKeyboard from 'material-ui/svg-icons/hardware/keyboard'
import { sendMessage } from '../store/chat'
import Translator from './Translator'
import MessageForm from './MessageForm'
import ModelScene from '../components/aframe/ModelScene'
import SpeechRecognizer from './SpeechRecognizer'

const style = {
  position: 'absolute',
  right: '5%',
  bottom: '20%'
}

class Home extends Component {
  constructor() {
    super()
    this.state = {
      showTxtInput: false
    }
  }

  handleClick = () => {
    this.setState(
      {
        showTxtInput: !this.state.showTxtInput
      },
      () => {
        this.state.showTxtInput && document.getElementById('chatbox').focus()
      }
    )
  }

  render() {
    const { mood, command } = this.props.chat
    const { sendUserMessage } = this.props
    const disableBtn = mood !== null || command !== null

    return (
      <main>
        <Translator />
        <ModelScene />
        <div id="input-buttons">
          {this.state.showTxtInput && <MessageForm disableBtn={disableBtn} />}
          <FloatingActionButton
            name="showTxtInput"
            onClick={this.handleClick}
            secondary={true}
            style={style}
            disabled={disableBtn}
          >
            <SvgIconKeyboard color="#fff" />
          </FloatingActionButton>
          <SpeechRecognizer
            sendUserMessage={sendUserMessage}
            disabled={disableBtn}
          />
        </div>
      </main>
    )
  }
}

const mapState = ({ chat }) => ({ chat })

const mapDispatch = dispatch => ({
  sendUserMessage: msg => dispatch(sendMessage(msg))
})

export default connect(mapState, mapDispatch)(Home)
