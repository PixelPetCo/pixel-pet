import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLink, Logout } from './auth'

import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

export default class PopoverExampleSimple extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  handleClick = event => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <IconMenu
          iconClassName="material-icons"
          iconButtonElement={<IconButton><MenuIcon /></IconButton>}
          iconStyle={{ fill: '#fff' }}
          onClick={this.handleClick}
        >
          menu
        </IconMenu>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <Link to="/">
              <MenuItem primaryText="Home" />
            </Link>
            <Link to="/account">
              <MenuItem primaryText="Account" />
            </Link>
            <MenuItem>
              <Logout />
            </MenuItem>
          </Menu>
        </Popover>
      </div>
    )
  }
}
