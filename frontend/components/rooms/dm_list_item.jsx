import { connect } from 'react-redux'
import {deleteMembership} from '../../actions/room_mebership_actions'
import {Link} from 'react-router-dom'
import React from 'react'

const DMListItem = ({room, handleClick, currentRoom, deleteMembership}) => {
  let classText
  if (room.id === currentRoom.id) {
    classText = 'room-list-link active'
  } else {
    classText = 'room-list-link'
  }
  if (room.is_dm) {
    return (
      <li key={room.id} className="room-list-item" onClick={handleClick(room.id)}>
        <Link className={classText} to={`/channels/${room.id}`}># {room.title}</Link>
        <button className='room-form-button' onClick={() => deleteMembership(room.id)}>X</button>
      </li>)
  } else return null
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMembership: (id) => dispatch(deleteMembership(id))
  }
}

export default connect(mapDispatchToProps)(DMListItem)
