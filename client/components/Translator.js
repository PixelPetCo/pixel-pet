import React from 'react'
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

export default Translator
