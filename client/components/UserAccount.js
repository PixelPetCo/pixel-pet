import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import UserDetail from './UserDetail'
import UserEdit from './UserEdit'

export class UserAccount extends Component {
  componentDidMount() {
    console.log('inside user page, ', this.props.user.id);
  }

  render() {
    console.log('user page component', this.props)
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

const mapDispatch = dispatch => {
  console.log('inside dispatch')
  return ({
    getSingleUser: userId => {
      console.log('inside getSingleUser dispatch', userId)
      dispatch(getSingleUser(userId))
    }
  })
}


export default connect(mapState, mapDispatch)(UserAccount)
