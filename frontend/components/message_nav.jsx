import React from 'react'

export default function ({ roomTitle, numUsers }) {
  return (
    <header className='message-nav'>
      <p id='header-title'>#{roomTitle}</p>
      <p id='num-users'><img id='user-count-icon' src={window.userCount} alt="user-count-icon"/>{numUsers}</p>
    </header>
  )
}
