import getColor from './getColor'

const base = getColor()

const anger = [
  {
    attribute: 'material.color',
    easing: 'ease-in',
    fill: 'forwards',
    to: base,
    from: '#DC050D',
    dur: '6000'
  }
]

export default anger
