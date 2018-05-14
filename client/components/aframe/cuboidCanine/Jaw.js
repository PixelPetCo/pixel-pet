import React from 'react'
import { animate } from '../PetModel'

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
      {animate(props.animation, 'jaw')}
    </a-box>
  )
}

export default Jaw
