import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'
import { withRouter } from 'react-router-dom'
import RoomsList from './rooms_list_container'
import MessagesAreaContainer from './messages_area_container'
import { fetchRoom } from '../actions/room_actions'
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

  componentDidMount () {
    let room = this.props.match.params.roomId || 1
    this.props.fetchRoom(room)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.roomId !== nextProps.match.params.roomId) {
      this.props.fetchRoom(nextProps.match.params.roomId)
    }
  }

  render () {
    let button, user
    if (this.props.loggedIn) {
      button = <button id='nav-logout' onClick={this.props.logout} >Log Out</button>
      user = <p id='username'><img id='presence' src={window.loggedInIcon} alt="logged-in"/> {this.props.user.username}</p>
    }

    return (
      <div className='main-app'>
        <div className='side-nav'>
          <header className='side-nav-header'>
            {user}
            {button}
          </header>
          <RoomsList />
        </div>
        <MessagesAreaContainer />
      </div>
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
    logout: () => dispatch(logout()),
    fetchRoom: (id) => dispatch(fetchRoom(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(mainApp))
