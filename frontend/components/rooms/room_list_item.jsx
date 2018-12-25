import { Link, matchPath } from 'react-router-dom'
import React from 'react'
import { ActionCable } from 'react-actioncable-provider'

export default class RoomListItem extends React.Component {
  constructor (props) {
    super(props)
    this.processClick = this.processClick.bind(this)
    this.matchParams = this.matchParams.bind(this)
    this.handleReceivedUser = this.handleReceivedUser.bind(this)
  }

  parseTitle (title) {
    let nameList = []
    title.split(', ').forEach(name => {
      if (name !== this.props.currentUser.username) {
        nameList.push(name)
      }
    })
    return nameList.join(', ')
  }

  processClick (e) {
    e.preventDefault()
    e.stopPropagation()
    this.refs.RoomsChannel.perform('delete_room', {
      id: this.props.room.id,
      current_user: this.props.currentUserId
    })
    this.props.switchRoom(this.props.mainRoom)
    this.props.history.push(`/channels/1`)
    if (this.props.room.is_dm) {
      let newTitle = this.parseTitle(this.props.room.title)
      this.refs.RoomsChannel.perform('update_room', {
        id: this.props.room.id,
        title: newTitle
      })
    }
  }

  handleReceivedUser (user) {
    if (user.action === 'login_user' || user.action === 'logout_user') {
      this.props.updateUser(user)
    } else {
      return null
    }
  }

  matchParams () {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/channels/:param',
      exact: true,
      strict: false
    })
    return match
  }

  loggedInUsers () {
    let users = this.props.users.filter((user) => {
      if (!user.room_ids) return null
      return user.room_ids.includes(this.props.room.id) && user.id !== this.props.currentUserId
    })
    return users.some((user) => {
      return user.logged_in === false
    })
  }

  render () {
    if (!this.matchParams()) return null
    let parameter = parseInt(this.matchParams().params.param)
    let classText
    if (this.props.room.id === parameter) {
      classText = 'room-list-link active'
    } else {
      classText = 'room-list-link'
    }
    let title, status
    if (this.props.room.is_dm) {
      if (this.props.room.title.length > 18) {
        title = this.props.room.title.slice(0, 15) + '...'
      } else {
        title = this.props.room.title
      }
      if (!this.loggedInUsers()) {
        status = <img id='presence' src={window.loggedInIcon} alt="logged-in"/>
      } else {
        status = 'o'
      }
      return (
        <li key={this.props.room.id} className="room-list-item" onClick={this.props.handleClick(this.props.room.id)}>
          <Link className={classText} to={`/channels/${this.props.room.id}`}>{status} {title}</Link>
          <button to='/channels/1' className='room-list-button' onClick={(e) => { this.processClick(e) }}>X</button>
          <ActionCable
            ref='RoomsChannel'
            channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
          />
        </li>)
    } else {
      let button
      if (this.props.room.id !== 1) {
        button = <button className='room-list-button' onClick={(e) => { this.processClick(e) }}>X</button>
      }
      return (
        <li key={this.props.room.id} className="room-list-item" onClick={this.props.handleClick(this.props.room.id)}>
          <Link className={classText} to={`/channels/${this.props.room.id}`}># {this.props.room.title}</Link>
          {button}
          <ActionCable
            ref='RoomsChannel'
            channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
            onReceived={this.handleReceivedUser}
          />
        </li>)
    }
  }
}
