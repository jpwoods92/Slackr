import React from 'react'
import {NavLink} from 'react-router-dom'

export default ({room, handleClick}) => {
  return (
    <li key={room.id} className="room-list-item" onClick={() => handleClick(room.id)}>
      <NavLink to={`/rooms/${room.id}`}>{room.title}</NavLink>
    </li>
  )
}
