import React from 'react'

const emotions = {
  happy: [
    {
      name: 'animation 1',
      animations: {
        head: (
          <a-animation
            attribute="rotation"
            dur="10000"
            fill="forwards"
            to="0 360 0"
            repeat="indefinite"
          />
        )
      }
    }
  ]
}

export default emotions
