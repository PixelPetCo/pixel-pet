import React from 'react'
import { animate } from '../PetModel'

const PawRightFront = props => {
  return (
    <a-box
      id="paw-right-front"
      material="shader:flat;color:#ffaaaa"
      depth="0.13"
      height="0.06"
      width="0.1"
      position="-0.101 0 -1.385"
      geometry=""
    >
      {animate(props.animation, 'pawRightFront')}
    </a-box>
  )
}

export default PawRightFront
