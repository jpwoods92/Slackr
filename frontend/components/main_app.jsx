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
    this.props.fetchRoom(this.props.match.params.roomId)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.roomId !== nextProps.match.params.roomId) {
      this.props.fetchRoom(nextProps.match.params.roomId)
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
        <MessagesAreaContainer />
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
    logout: () => dispatch(logout()),
    fetchRoom: () => dispatch(fetchRoom())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(mainApp))
