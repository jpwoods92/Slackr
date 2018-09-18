import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'
import { Route } from 'react-router-dom'
import RoomsList from './rooms_list_container'
class mainApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      auth: {
        isLoggedIn: false,
        user: ''
      }
    }
  }

  render () {
    let button
    if (this.props.loggedIn) {
      button = <button id='nav-logout' onClick={this.props.logout} >Log Out</button>
    }

    return (
      <Fragment>
        {button}
        <RoomsList />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUserId),
    user: state.entities.users[state.session.currentUserId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mainApp)
