
import React from 'react'
import Timestamp from 'react-timestamp'
import { connect } from 'react-redux'

const Message = ({users, message}) => {
  if (!message || !users[message.user_id]) return null
  let messageUsername = users[message.user_id].username
  return (
    <li className='message-list-item'>
      <img className='avatar-img' src={window.userAvatar} alt=""/>
      <div className='message-item-contents'>
        <div className='username-timestamps-container'>
          <div className='message-username'>{messageUsername}</div>
          <Timestamp className='timestamp' className='timestamp' time={message.created_at} format='time' />
        </div>
        <div className='message-body'>{message.body}</div>
      </div>
    </li>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.entities.users
  }
}

export default connect(mapStateToProps)(Message)
