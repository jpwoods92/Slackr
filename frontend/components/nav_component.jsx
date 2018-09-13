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
      <Link id='nav-logo-link' to='/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="50 0 576 270"
        width="125" aria-label="Slack" class="c-slacklogo--color svg-replaced"
        shape-rendering="geometricPrecision">
        <path fill="#ECB32D" d="M141.8 87.1c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z"></path>
        <path fill="#63C1A0" d="M98.3 101.2c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z"></path>
        <path fill="#E01A59" d="M177.2 158.6c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7L84 166.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.5-28.1 86.5-28.1z"></path>
        <path fill="#331433" d="M102 183.1c5.6-1.8 12.9-4.2 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z"></path>
        <path fill="#D62027" d="M145.6 168.9c7.8-2.5 15.1-4.9 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z"></path>
        <path fill="#89D3DF" d="M163 115.1c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.4 28.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.4-28 86.4-28z"></path>
        <path fill="#258B74" d="M87.9 139.5c5.6-1.8 12.9-4.2 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z"></path>
        <path fill="#819C3C" d="M131.4 125.4c7.8-2.5 15.1-4.9 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z"></path>
      </svg></Link>
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
