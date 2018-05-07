import React from 'react'
import Routes from './Routes'
import Navbar from './Navbar'

const Main = () => {
  return (
    <div id="main" className="fill-xy column">
      <Navbar />
      <Routes />
    </div>
  )
}

export default Main
