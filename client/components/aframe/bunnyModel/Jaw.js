import React from 'react'
import { animate } from '../PetModel'

const Jaw = props => {
  return (
    <a-box
      id="jaw"
      material="shader:flat;color:#ffd1d1"
      depth="0.250"
      height="0.020"
      width="0.199"
      position="0 -0.19004101255011424 0.10023251709894837"
    >
      {animate(props.animation, 'jaw')}
    </a-box>
  )
}

export default Jaw
