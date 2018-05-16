import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader } from 'material-ui/Card'

const style = {
  position: 'absolute',
  top: '12%',
  left: '25%',
  width: '50%'
}

const Translator = props => (
  <Card style={style}>
    <CardHeader subtitle="PixelPeep Translator" />
    <CardHeader title={props.botText || ''} />
  </Card>
)

const mapState = ({ chat, user }) => {
  let botText
  if (user.name) {
    botText = chat.botText
  } else {
    switch (user.petPersonality) {
      case 'chipper':
        botText = `Hello, human! What's your name?

  [To interact with your pet, you can either use the keyboard button to type your messages or the mic button to express them verbally! You can also roam around the environment using the arrow keys]`
        break
      case 'grupmy':
        botText = `Oh, a human. What's your name?

  [To interact with your pet, you can either use the keyboard button to type your messages or the mic button to express them verbally! You can also roam around the environment using the arrow keys]`
        break
      default:
        botText = `Hello, human! What should I call you?

  [To interact with your pet, you can either use the keyboard button to type your messages or the mic button to express them verbally! You can also roam around the environment using the arrow keys]`
    }
  }
  return { botText }
}

export default connect(mapState)(Translator)
