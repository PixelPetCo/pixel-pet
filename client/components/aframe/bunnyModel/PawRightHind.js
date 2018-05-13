import React from 'react'
import { animate } from '../PetModel'

const PawRightHind = props => {
  return (
    <a-box
      id="paw-right-hind"
      material="shader:flat;color:#ffaaaa"
      depth="0.13"
      height="0.06"
      width="0.1"
      position="-0.101 0 -1.614"
      geometry=""
    >
      {animate(props.animation, 'pawRightHind')}
    </a-box>
  )
}

export default PawRightHind
