import React from 'react'
import { animate } from '../PetModel'

const PawLeftHind = props => {
  return (
    <a-cylinder
      id="paw-left-hind"
      material="shader:flat;color:#424743"
      height="0.07"
      radius="0.07"
      position="0.13 0 -1.614"
      geometry=""
    >
      {animate(props.animation, 'pawLeftHind')}
    </a-cylinder>
  )
}

export default PawLeftHind
