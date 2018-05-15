import React from 'react'
import { animate } from '../PetModel'

const PawRightHind = props => {
  return (
    <a-cylinder
      id="paw-right-hind"
      material="shader:flat;color:#424743"
      height="0.07"
      radius="0.07"
      position="-0.101 0 -1.614"
      geometry=""
    >
      {animate(props.animation, 'pawRightHind')}
    </a-cylinder>
  )
}

export default PawRightHind
