import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const MessageForm = () => {
  return (
    <form>
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
