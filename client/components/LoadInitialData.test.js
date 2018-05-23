/* eslint-env mocha,chai */
import 'jsdom-global/register'
import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LoadInitialData } from './LoadInitialData'

const adapter = new Adapter()
const disableLifecycleMethods = true
enzyme.configure({
  adapter,
  disableLifecycleMethods
})

describe('LoadInitialData', () => {
  const resolves = () => Promise.resolve('Oh yeah')
  const rejects = () => Promise.reject(new Error('Oh noes'))

  it('initializes loaded state to false', () => {
    const lid = shallow(<LoadInitialData load={resolves} />)
    expect(lid.state().loaded).to.equal(false)
  })

  it('initializes error state to false', () => {
    const lid = shallow(<LoadInitialData load={resolves} />)
    expect(lid.state().error).to.equal(false)
  })

  it('renders the loading message initially', () => {
    const lid = shallow(<LoadInitialData load={resolves} />)
    expect(lid.find('div').text()).to.equal('Loading...')
  })

  it('sets loading state to true after successful load', async () => {
    const lid = shallow(<LoadInitialData load={resolves} />)
    await lid.instance().componentDidMount()
    expect(lid.state().loaded).to.equal(true)
    expect(lid.state().error).to.equal(false)
  })

  it('renders `Main` after successful load', async () => {
    const lid = shallow(<LoadInitialData load={resolves} />)
    await lid.instance().componentDidMount()
    lid.update()
    expect(lid.find('Main').length).to.equal(1)
  })

  it('sets error state to true after unsuccessful load', async () => {
    const lid = shallow(<LoadInitialData load={rejects} />)
    await lid.instance().componentDidMount()
    expect(lid.state().loaded).to.equal(false)
    expect(lid.state().error).to.equal(true)
  })

  it('renders error message after unsuccessful load', async () => {
    const lid = shallow(<LoadInitialData load={rejects} />)
    await lid.instance().componentDidMount()
    lid.update()
    expect(lid.find('div').text()).to.equal(
      'We are experiencing some technical difficulties...'
    )
  })
})
