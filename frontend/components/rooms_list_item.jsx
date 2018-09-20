import React from 'react'
import {Link} from 'react-router-dom'

export default ({room, handleClick, currentRoom}) => {
  let classText
  if (room.id === currentRoom.id) {
    classText = 'room-list-link active'
  } else {
    classText = 'room-list-link'
  }
  return (
    <li key={room.id} className="room-list-item" onClick={() => handleClick(room.id)}>
      <Link className={classText} to={`/channels/${room.id}`}># {room.title}</Link>
    </li>)
}
