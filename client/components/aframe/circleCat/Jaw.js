import React from 'react'
import { animate } from '../PetModel'

const Jaw = props => {
  return (
    <a-sphere
      id="jaw"
      material="shader:flat;color:#303331" geometry=""
      radius=".04"
      position="0 -0.19004101255011424 0.094"
      scale="2 1 1" >
      {animate(props.animation, 'jaw')}
    </a-sphere>
  )
}

export default Jaw
