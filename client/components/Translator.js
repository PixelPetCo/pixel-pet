import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

const Translator = props => (
  <Card>
    <CardHeader
    subtitle='PixelPeep Translator'
    />
    <CardHeader
    title={props.petReply || ''}
    />
  </Card>
)

export default Translator
