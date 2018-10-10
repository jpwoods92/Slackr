import { Link } from 'react-router-dom'
import React from 'react'
import { ActionCable } from 'react-actioncable-provider'

export default class RoomsListItem extends React.Component {
  constructor (props) {
    super(props)
    this.room = this.props.room
    this.handleClick = this.props.handleClick
    this.currentRoom = this.props.currentRoom
    this.processClick = this.processClick.bind(this)
  }
  processClick (e) {
    e.preventDefault()
    this.refs.RoomsChannel.perform('speakDelete', {
      id: this.room.id,
      current_user: this.props.currentUserId
    })
  }

  render () {
    let classText
    if (this.room.id === this.currentRoom.id) {
      classText = 'room-list-link active'
    } else {
      classText = 'room-list-link'
    }

    if (!this.room.is_dm) {
      let button
      if (this.room.id !== 1) {
        button = <button className='room-list-button' onClick={(e) => { this.processClick(e) }}>X</button>
      }
      return (
        <li key={this.room.id} className="room-list-item" onClick={this.handleClick(this.room.id)}>
          <Link className={classText} to={`/channels/${this.room.id}`}># {this.room.title}</Link>
          {button}
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
