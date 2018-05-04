import React from 'react'

const happy = [
  {
    name: 'animation 1',
    animations: {
      head: [
        <a-animation
          key="1"
          attribute="rotation"
          dur="10000"
          fill="forwards"
          to="0 360 0"
          repeat="indefinite"
        />
      ]
    }
  }
]

export default { happy }
