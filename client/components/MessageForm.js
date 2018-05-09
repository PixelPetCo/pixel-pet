import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../store/chat'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          type="text"
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
        />
      </form>
    )
  }
}

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

const mapDispatch = dispatch => ({
  sendUserMessage: msg => dispatch(sendMessage(msg))
})

export default connect(null, mapDispatch)(MessageForm)
