import React from 'react'

const speak = {
  jaw: [
    <a-animation
      key="1"
      attribute="position"
      dur="150"
      direction="alternate"
      easing="linear"
      repeat="indefinite"
      from="0 0.29 -0.892"
      to="0 0.25 -0.892"
    />,

    <a-animation
      key="2"
      attribute="rotation"
      dur="150"
      direction="alternate"
      easing="linear"
      repeat="indefinite"
      from="0 0 0"
      to="15 0 0"
    />
  ]
}

export default speak
