import React from 'react'

export default function ({ room }) {
  if (room.is_private === undefined) return null
  let members = room.member_ids
  return (
    <header className='message-nav'>
      <p id='header-title'>#{room.title}</p>
      <p id='num-users'><img id='user-count-icon' src={window.userCount} alt="user-count-icon"/>{members.length}</p>
    </header>
  )
}
