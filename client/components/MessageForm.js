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
      updateUser({ ...this.props.user, name: this.state.userMessage })
      let botText
      switch (this.props.user.petPersonality) {
        case 'chipper':
          botText = `Nice to meet you ${
            this.state.userMessage
          }! I'm very special because I care about you and pay attention to your emotions, plus I know some tricks! I sure could use a name, though. What would you like to call me?`
          break
        case 'grupmy':
          botText = `Okay, ${
            this.state.userMessage
          }. Looks like I'm stuck with you and your human emotions and am going to have to listen to your commads. Oh, you're probably going to come up with some embarrassing nick name to call me. Well, what is it?`
          break
        default:
          botText = `Nice to meet you ${
            this.state.userMessage
          }! I'm very special because I care about you and pay attention to your emotions, plus I know some tricks! I sure could use a name, though. What would you like to call me?`
          break
      }
      const fakeResponse = { botText, mood: null, command: null, context: null }
      this.props.displayResponse(fakeResponse)
    } else if (!this.props.user.petName) {
      evt.preventDefault()
      updateUser({ ...this.props.user, petName: this.state.userMessage })
      let botText
      switch (this.props.user.petPersonality) {
        case 'chipper':
          botText = `hm, ...${
            this.state.userMessage
          }. I really like it! Yay! I'm so excited to be friends`
          break
        case 'grupmy':
          botText = `Fine, ${
            this.state.userMessage
          }. I'd have to care to tell you I hate it.`
          break
        default:
          botText = `hm, ...${
            this.state.userMessage
          }. I really like it! Yay! I'm so excited to be friends`
          break
      }
      const fakeResponse = { botText, mood: null, command: null, context: null }
      this.props.displayResponse(fakeResponse)
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
