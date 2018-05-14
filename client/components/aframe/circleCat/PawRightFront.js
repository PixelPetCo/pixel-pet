import React from 'react'
import { animate } from '../PetModel'

const PawRightFront = props => {
  return (
    <a-cylinder
      id="paw-right-front"
      material="shader:flat;color:#424743"
      height="0.07"
      radius="0.07"
      position="-0.101 0 -1.385"
      geometry=""
    >
      {animate(props.animation, 'pawRightFront')}
    </a-cylinder>
  )
}

export default PawRightFront
