import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthRoute, Login, Signup } from './auth'
import Welcome from './Welcome'
// import Home from './Home'
import NoMatch from './NoMatch'
import UserAccount from './UserAccount'

const Routes = () => (
  <div className='fill-xy center-xy column'>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      {/* <AuthRoute path='/home' component={Welcome} /> */}
      <Route path="/account" component={UserAccount} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Routes
