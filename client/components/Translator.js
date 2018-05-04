import React from 'react'
import { connect } from 'react-redux'

const Translator = props => (
  <div id="PixelPeep Translator">{props.botText || 'PixelPeep Translator'}</div>
)

const mapState = ({ botText, mood, command, context }) => ({
  botText,
  mood,
  command,
  context
})

export default connect(mapState)(Translator)
