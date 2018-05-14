import React from 'react'
import { animate } from '../PetModel'

const PawLeftFront = props => {
  return (
    <a-cylinder
      id="paw-left-front"
      material="shader:flat;color:#424743"
      height="0.07"
      radius="0.07"
      position="0.13 0 -1.385"
      geometry=""
    >
      {animate(props.animation, 'pawLeftFront')}
    </a-cylinder>
  )
}

export default PawLeftFront
