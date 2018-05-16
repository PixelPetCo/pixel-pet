import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardText } from 'material-ui/Card'

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
    {props.tooltip && <CardText>{props.tooltip}</CardText>}
  </Card>
)

const mapState = ({ chat, user }) => {
  let botText
  let tooltip
  if (user.name) {
    botText = chat.botText
    tooltip = chat.tooltip
  } else {
    tooltip = `To interact with your pet, you can either use the keyboard button to type your messages or the mic button to express them verbally! You can also roam around the environment using the arrow keys]`
    switch (user.petPersonality) {
      case 'chipper':
        botText = `Hi there, human! I'm a PixelPet. What's your name?`
        break
      case 'grupmy':
        botText = `Oh, a human. I'm a PixelPet if you couldn't tell. What's your name?`
        break
      default:
        botText = `Hi there, human! I'm a PixelPet. What's your name?`
    }
  }
  return { botText, tooltip }
}

export default connect(mapState)(Translator)
