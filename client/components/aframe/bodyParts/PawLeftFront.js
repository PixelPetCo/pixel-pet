import React from 'react'
import { animate } from '../PetModel'

const PawLeftFront = props => {
  return (
    <a-box
      id="paw-left-front"
      material="shader:flat;color:#513797"
      depth="0.13"
      height="0.06"
      width="0.1"
      position="0.13 0.025 -1.385"
    >
      {animate(props.animation, 'pawLeftFront')}
    </a-box>
  )
}

export default PawLeftFront
