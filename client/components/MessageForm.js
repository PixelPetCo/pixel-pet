import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage, sendMessageAction } from '../store/chat'
import { updateUser } from '../store/user'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const isMobile = window !== undefined ? window.innerWidth <= 500 : false

const styleText = isMobile
  ? {
      position: 'absolute',
      width: '70%',
      right: '23%',
      bottom: '20%'
    }
  : {
      position: 'absolute',
      width: '18%',
      right: '15%',
      bottom: '20%'
    }

const styleButton = isMobile
  ? {
      position: 'absolute',
      right: '23%',
      bottom: '5%'
    }
  : {
      position: 'absolute',
      right: '9%',
      bottom: '20%'
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
    this.props.sendMessage(this.state.userMessage)
    this.setState({ userMessage: '' })
  }

  render() {
    const { disableBtn } = this.props
    const { userMessage } = this.state

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
          disabled={disableBtn || userMessage === ''}
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
