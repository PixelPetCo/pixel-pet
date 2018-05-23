import {expect} from 'chai'
import React from 'react'
import enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {spy} from 'sinon'
import Jaw from './Jaw'
import speak from '../animations/jaw/speak'

const adapter = new Adapter()
const disableLifecycleMethods = true
enzyme.configure({
  adapter,
  disableLifecycleMethods
})

describe('jaw speak animation', () => {
  let JawCompWrapper
  let sendSpy

  beforeEach('create <Jaw /> wrapper', () => {
    JawCompWrapper = shallow(<Jaw />)
  })

  describe('receives animation for the jaw component', () => {
    it('gets the correct position for the speak animation', () => {
      expect(JawCompWrapper.props().animation).to.be.equal(speak)
    })
  })
})
