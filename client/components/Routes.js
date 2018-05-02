import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {AuthRoute, Login, Signup} from './auth'
import Welcome from './Welcome'
import Home from './Home'
import NoMatch from './NoMatch'
import Main3dModel from '../Main3d'

const Routes = () => (
  <div className='fill-xy center-xy column'>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/3d-model' component={Main3dModel} />
      <AuthRoute path='/home' component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Routes
