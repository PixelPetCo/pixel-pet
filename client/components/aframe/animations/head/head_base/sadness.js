import getColor from './getColor'

const base = getColor()

const sadness = [
  {
    attribute: 'material.color',
    easing: 'ease-in',
    fill: 'forwards',
    to: base,
    from: '#5ABEF0',
    dur: '6000'
  }
]

export default sadness
