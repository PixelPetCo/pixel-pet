import React from 'react'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

const Translator = props => (
  <Card>
    <CardHeader
    subtitle='PixelPeep Translator'
    />
    <CardHeader
    title={props.botText || ''}
    />
    {/* <div id="PixelPeep Translator">{props.botText || 'PixelPeep Translator'}</div> */}
  </Card>
)

const mapState = state => {
  const { botText, mood, command, context } = state.chat
  return {
    botText,
    mood,
    command,
    context
  }
}

export default connect(mapState)(Translator)
