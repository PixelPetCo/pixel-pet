import React from 'react'
import Head from './Head'
import joy from '../animations/torso/joy'

const Torso = props => {
  return (
    <a-box
      id="body"
      material="shader:flat;color:#291B4E"
      rotation="0 0 45"
      depth="0.27"
      height="0.27"
      width="0.27"
      position="0.024 0.324 -1.501"
      geometry=""
    >
      <Head animation={props.animation} animate={props.animate} />
      {props.animate(props.animation, 'torso')}
    </a-box>
  )
}

export default Torso

// animation={head && head.map(animation => animation)}
