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

const mapState = ({ chat }) => {
  const { botText, tooltip } = chat
  return { botText, tooltip }
}

export default connect(mapState)(Translator)
