import React from 'react'

const PawLeftFront = props => {
  return (
    <a-box
      id="paw-left-front"
      material="shader:flat;color:#513797"
      depth="0.13"
      height="0.06"
      width="0.1"
      position="0.13 0 -1.385"
      geometry=""
    >
      {props.animate(props.animation, 'pawLeftFront')}
    </a-box>
  )
}

export default PawLeftFront
