import React from 'react'

const anger = [
  {
    attribute: 'rotation',
    dur: '400',
    direction: 'alternate',
    fill: 'forwards',
    from: '0 0 0',
    to: '45 0 0',
    repeat: '3'
  },
  {
    attribute: 'position',
    easing: 'linear',
    dur: '400',
    direction: 'alternate',
    fill: 'forwards',
    from: '-0.101 0 -1.385',
    to: '-0.101 0.1 -1.485',
    repeat: '3'
  },
  {
    id: 'paw-lift-angle',
    attribute: 'rotation',
    dur: '200',
    delay: '800',
    direction: 'normal',
    fill: 'forwards',
    from: '0 0 0',
    to: '35 0 0',
    repeat: '1'
  },
  {
    id: 'paw-raise-height',
    attribute: 'position',
    easing: 'linear',
    delay: '800',
    dur: '200',
    direction: 'normal',
    fill: 'forwards',
    from: '-0.101 0 -1.385',
    to: '-0.101 0.12 -1.385',
    repeat: '1'
  },
  {
    id: 'paw-stomp-angle',
    attribute: 'rotation',
    dur: '100',
    delay: '1000',
    direction: 'normal',
    fill: 'forwards',
    from: '35 0 0',
    to: '0 0 0',
    repeat: '1'
  },
  {
    id: 'paw-stomp-height',
    attribute: 'position',
    easing: 'linear',
    delay: '1000',
    dur: '100',
    direction: 'normal',
    fill: 'forwards',
    from: '-0.101 0.12 -1.385',
    to: '-0.101 0 -1.385',
    repeat: '1'
  },
  {
    id: 'paw-shift',
    attribute: 'rotation',
    dur: '50',
    delay: '1100',
    easing: 'linear',
    direction: 'alternate',
    fill: 'forwards',
    from: '0 -15 0',
    to: '0 15 0',
    repeat: '4'
  }
]

export default anger
