import React from 'react'

const Jaw = props => {
  return (
    <a-box
      id="jaw"
      material="shader:flat;color:#513797"
      depth="0.250"
      height="0.020"
      width="0.199"
      position="0 0.290 -0.892"
      rotation=""
    >
      {props.animation}
    </a-box>
  )
}

export default Jaw
