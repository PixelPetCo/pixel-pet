import React from 'react'
import Head from './Head'
import joy from '../animations/torso/joy'

const animate = props => {
  let animations
  let trigger = props.command || props.mood
  switch (trigger) {
    case 'joy':
      animations = joy || []
      break
    case 'speak':
      animations = speak || []
      break
    default:
      animations = []
  }
  return animations.map(animation => animation)
}

const Body = props => {
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
      <Head mood={props.mood} command={props.command} />
      {animate(props)}
    </a-box>
  )
}

export default Body

// animation={head && head.map(animation => animation)}
