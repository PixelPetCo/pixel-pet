import React from 'react'
import { animate } from '../PetModel'

const PawLeftFront = props => {
  return (
    <a-tetrahedron
      id="paw-left-front"
      material="shader:flat;color:#513797"
      raduis="0.1"
      position="0.13 0 -1.385"
      geometry=""
    >
      {animate(props.animation, 'pawLeftFront')}
    </a-tetrahedron>
  )
}

export default PawLeftFront
