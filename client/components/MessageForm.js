import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../store/chat'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styleText = {
  position: 'absolute',
  width: '18%',
  right: '15%',
  bottom: '14%'
}

const styleButton = {
  position: 'absolute',
  right: '9%',
  bottom: '14%'
}

class MessageForm extends Component {
  constructor() {
    super()
    this.state = {
      userMessage: ''
    }
  }

  handleChange = evt => {
    this.setState({
      userMessage: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.sendUserMessage(this.state.userMessage)
    this.setState({ userMessage: '' })
  }

  render() {
    const { disableBtn } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          type="text"
          id="chatbox"
          name="message"
          hintText="Message to PixelPet..."
          style={styleText}
          value={this.state.userMessage}
          onChange={this.handleChange}
        />
        <RaisedButton
          type="submit"
          label="send"
          primary={true}
          style={styleButton}
          disabled={disableBtn}
        />
      </form>
    )
  }
}

export default MessageForm
