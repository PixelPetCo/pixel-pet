import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { me } from '../store/user'
import { getPets } from '../store/pets'
import Main from './Main'

// LoadInitialData: this sits on top of our `Main` component and fetches
// the initial data that we need to render the app, regardless of where
// the visitor lands. As of right now, we try to fetch the current user
// from the session.
export class LoadInitialData extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      error: false
    }
  }

  async componentDidMount() {
    try {
      await this.props.load()
      this.setState({ loaded: true })
    } catch (error) {
      this.setState({ error: true })
    }
  }

  render() {
    const { loaded, error } = this.state
    return loaded ? (
      <Main />
    ) : error ? (
      <div>We are experiencing some technical difficulties...</div>
    ) : (
      <div>Loading...</div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    // This will execute when our Main component mounts. This is a great place
    // to fetch our initial data.
    load: async () => {
      await dispatch(me())
      await dispatch(getPets())
    }
  }
}

export default withRouter(connect(null, mapDispatch)(LoadInitialData))
