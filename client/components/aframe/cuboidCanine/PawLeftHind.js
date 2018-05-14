import React from 'react'
import { animate } from '../PetModel'

const PawLeftHind = props => {
  return (
    <a-box
      id="paw-left-hind"
      material="shader:flat;color:#513797"
      depth="0.13"
      height="0.06"
      width="0.1"
      position="0.13 0.025 -1.614"
    >
      {animate(props.animation, 'pawLeftHind')}
    </a-box>
  )
}

export default PawLeftHind
