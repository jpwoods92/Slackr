import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'

const mainApp = (props) => {
  let button
  if (props.loggedIn) {
    button = <li><button id='nav-logout' onClick={props.logout} >Log Out</button></li>
  }
  return (
    <div>
      <h1>Hi There Dude</h1>
      {button}
    </div>
  )
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
