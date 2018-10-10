import {Link} from 'react-router-dom'
import React from 'react'
import { ActionCable } from 'react-actioncable-provider'

export default class DMListItem extends React.Component {
  constructor (props) {
    super(props)
    this.room = this.props.room
    this.handleClick = this.props.handleClick
    this.currentRoom = this.props.currentRoom
    this.processClick = this.processClick.bind(this)
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
    let newTitle = this.parseTitle(this.room.title)
    e.preventDefault()
    this.refs.RoomsChannel.perform('speakDelete', {
      id: this.room.id,
      current_user: this.props.currentUserId
    })
    this.refs.RoomsChannel.perform('speakUpdate', {
      id: this.room.id,
      title: newTitle
    })
  }
  render () {
    let classText
    if (this.room.id === this.currentRoom.id) {
      classText = 'room-list-link active'
    } else {
      classText = 'room-list-link'
    }
    let title
    if (this.room.is_dm) {
      if (this.room.title.length > 18) {
        title = this.room.title.slice(0, 15) + '...'
      } else {
        title = this.room.title
      }
      return (
        <li key={this.room.id} className="room-list-item" onClick={this.handleClick(this.room.id)}>
          <Link className={classText} to={`/channels/${this.room.id}`}># {title}</Link>
          <button className='room-list-button' onClick={(e) => { this.processClick(e) }}>X</button>
          <ActionCable
            ref='RoomsChannel'
            channel={{ channel: 'RoomsChannel', room: 'RoomRoom' }}
          />
        </li>)
    } else {
      return null
    }
  }
}
