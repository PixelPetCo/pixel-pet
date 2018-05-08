import React from 'react'

const PawRightFront = props => {
  return (
    <a-box
      id="paw-right-front"
      material="shader:flat;color:#513797"
      depth="0.13"
      height="0.06"
      width="0.1"
      position="-0.101 0 -1.385"
      geometry=""
    >
      {props.animate(props.animation, 'PawRightFront')}
    </a-box>
  )
}

export default PawRightFront
