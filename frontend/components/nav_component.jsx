import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'
import { Route, Link, withRouter } from 'react-router-dom'

const navLinks = (props) => {
  let nav
  if (props.loggedIn) {
    nav = (
      <ul className='nav-list'>
        <li><button id='nav-workspaces'>Your Workspaces</button></li>
        <li><button id='nav-logout' onClick={props.logout} >Log Out</button></li>
      </ul>
    )
  } else {
    nav = (
      <ul className='nav-list'>
        <li><Link id='nav-login' to='/login'>Log In</Link></li>
        <li><Link id='nav-signup' to='/signup'>Sign Up</Link></li>
      </ul>
    )
  }

  return (
    <header className='nav-bar'>
      <Link id='nav-logo-link' to='/'><img src={window.slackrLogo} alt="slackr-logo"/></Link>
      {nav}
    </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(navLinks)
