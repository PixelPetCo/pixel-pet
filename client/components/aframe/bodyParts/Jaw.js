import React from 'react'
// import speak from '../animations/torso/speak'

const Jaw = props => {
  return (
    <a-box
      id="jaw"
      material="shader:flat;color:#513797"
      depth="0.250"
      height="0.020"
      width="0.199"
      position="0 -0.2 0.2307664801058491"
      rotation=""
    >
      {props.animate(props.animation, 'jaw')}
    </a-box>
  )
}

export default Jaw
