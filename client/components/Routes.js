import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login, Signup } from './auth'
import Welcome from './Welcome'
import UserAccount from './UserAccount'
import Adopt from './Adopt'
import NoMatch from './NoMatch'

const Routes = () => (
  <div className="fill-xy center-xy column">
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/adopt" component={Adopt} />
      <Route path="/account" component={UserAccount} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Routes
