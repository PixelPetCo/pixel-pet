import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import UserDetail from './UserDetail'
import UserEdit from './UserEdit'

class UserAccount extends Component {
  render() {
    const user = this.props.user || {}
    return (
      <div>
        {user.id ? (
          <div>
            <UserDetail user={this.props.user} />
            <Switch>
              <Route
                path="/account/edit"
                render={() => <UserEdit {...this.props} />}
              />
            </Switch>
          </div>
        ) : (
          <h5>Please login to view this page</h5>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  singleUser: state.singleUser
})

export default connect(mapState, null)(UserAccount)
