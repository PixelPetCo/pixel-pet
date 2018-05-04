import React from 'react'

const happy = [
  {
    name: 'wag',
    animations: {
      body: [
        <a-animation
          key="1"
          attribute="rotation"
          dur="400"
          direction="alternate"
          fill="forwards"
          from="0 10 45"
          to="0 -10 45"
          repeat="indefinite"
        />,
        <a-animation
          key="2"
          attribute="position"
          dur="400"
          direction="alternate"
          fill="forwards"
          from="-0.024 0.324 -1.501"
          to="0.064 0.324 -1.501"
          repeat="indefinite"
        />
      ]
    }
  }
]

export default { happy }
