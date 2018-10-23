import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'
import { withRouter } from 'react-router-dom'
import RoomsList from './rooms/rooms_list_container'
import MessagesAreaContainer from './messages/messages_area_container'
import { fetchRoom } from '../actions/room_actions'
import { ActionCable } from 'react-actioncable-provider'
class mainApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      auth: {
        isLoggedIn: false,
        user: ''
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (parseInt(this.props.history.location.pathname.split('/').pop()) !== parseInt(nextProps.history.location.pathname.split('/').pop())) {
      this.props.fetchRoom(parseInt(nextProps.history.location.pathname.split('/').pop()))
    }
  }

  handleClick (e) {
    e.preventDefault()
    this.props.logout()
    this.refs.RoomsChannel.perform('logout_user', this.props.user)
  }

  render () {
    let button, user
    if (this.props.loggedIn) {
      button = <button id='nav-logout' onClick={this.handleClick} >Log Out</button>
      user = <p id='username'><img id='presence' src={window.loggedInIcon} alt="logged-in"/> {this.props.user.username}</p>
    }

    return (
      <div className='main-app'>
        <div className='side-nav'>
          <header className='side-nav-header'>
            {user}
            {button}
            <ActionCable
              ref='RoomsChannel'
              channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
            />
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
