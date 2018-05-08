import React from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'

const Translator = props => (
  <Card style={style}>
    <CardHeader subtitle="PixelPeep Translator" />
    <CardHeader title={props.petReply || ''} />
  </Card>
)

const style = {
  position: 'absolute',
  top: '12%',
  left: '25%',
  width: '50%'
}

export default Translator
