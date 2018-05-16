import React from 'react'
import { animate } from '../PetModel'

const PawRightFront = props => {
  return (
    <a-tetrahedron
      id="paw-right-front"
      material="shader:flat;color:#513797"
      raduis="0.1"
      position="-0.101 0 -1.385"
      geometry=""
    >
      {animate(props.animation, 'pawRightFront')}
    </a-tetrahedron>
  )
}

export default PawRightFront
