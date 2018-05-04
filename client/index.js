import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import history from './history'
import { App } from './components'

import 'aframe'
import 'aframe-animation-component'
import 'aframe-event-set-component'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
)
