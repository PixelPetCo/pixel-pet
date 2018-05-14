import getColor from './getColor'

const base = getColor()

const joy = [
  {
    attribute: 'material.color',
    easing: 'ease-in',
    fill: 'forwards',
    to: base,
    from: '#F0F007',
    dur: '6000'
  }
]

export default joy
