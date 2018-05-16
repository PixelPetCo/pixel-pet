import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage, sendMessageAction } from '../store/chat'
import { updateUser } from '../store/user'

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
    if (!this.props.user.name) {
      evt.preventDefault()
      let botText;
      switch (this.props.user.petPersonality) {
        case 'chipper':
          botText = `Hello, human! What's your name?

[To interact with your pet, you can either use the keyboard button to type your messages or the mic button to express them verbally!]`
          break;
        case 'grupmy':
          botText = `Oh, a human. What's your name?

[To interact with your pet, you can either use the keyboard button to type your messages or the mic button to express them verbally!]`
          break;
        default:
          botText = `Hello, human! What should I call you?

[To interact with your pet, you can either use the keyboard button to type your messages or the mic button to express them verbally!]`
      }
      const fakeResponse = { botText, mood: null, command: null, context: null }

    } else if (!this.props.user.petName) {
      evt.preventDefault()
    } else {
      evt.preventDefault()
      this.props.sendMessage(this.state.userMessage)
      this.setState({ userMessage: '' })
    }
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

const mapState = ({ user }) => ({
  user
})

const mapDispatch = dispatch => ({
  sendMessage: msg => dispatch(sendMessage(msg)),
  displayResponse: fakeResponse => dispatch(sendMessageAction(fakeResponse)),
  updateUser: user => dispatch(updateUser(user))
})

export default connect(mapState, mapDispatch)(MessageForm)
