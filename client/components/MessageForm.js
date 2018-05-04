import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import sendMessage from '../store/chat'

const handleSubmit = evt => {
  evt.preventDefault()
  sendMessage(evt.target.value)
}

const MessageForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        hintText="Write to your PixelPet!"
        type="message"
        name="message"
      />
      <RaisedButton type="submit" label="send" primary={true} />
    </form>
  )
}

export default MessageForm
