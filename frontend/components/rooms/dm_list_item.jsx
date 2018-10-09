import { connect } from 'react-redux'
import {deleteMembership} from '../../actions/room_mebership_actions'
import {Link} from 'react-router-dom'
import React from 'react'

const RoomsListItem = ({room, handleClick, currentRoom, deleteMembership}) => {
  let classText
  if (room.id === currentRoom.id) {
    classText = 'room-list-link active'
  } else {
    classText = 'room-list-link'
  }
  let title
  if (room.is_dm) {
    let button
    if (room.is_private) {
      button = <button className='room-list-button' onClick={(e) => { e.preventDefault(); deleteMembership(room.id) }}>X</button>
    }
    if (room.title.length > 18) {
      title = room.title.slice(0, 15) + '...'
    } else {
      title = room.title
    }
    return (
      <li key={room.id} className="room-list-item" onClick={handleClick(room.id)}>
        <Link className={classText} to={`/channels/${room.id}`}># {title}</Link>
        {button}
      </li>)
  } else {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  deleteMembership: (id) => dispatch(deleteMembership(id))
})

export default connect(null, mapDispatchToProps)(RoomsListItem)
