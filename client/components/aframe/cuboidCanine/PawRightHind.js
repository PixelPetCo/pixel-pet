import React from 'react'
import { animate } from '../PetModel'

const PawRightHind = props => {
  return (
    <a-box
      id="paw-right-hind"
      material="shader:flat;color:#513797"
      depth="0.13"
      height="0.06"
      width="0.1"
      position="-0.101 0.025 -1.614"
    >
      {animate(props.animation, 'pawRightHind')}
    </a-box>
  )
}

export default PawRightHind
