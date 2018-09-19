import React from 'react'
import Timestamp from 'react-timestamp'
import { connect } from 'react-redux'

class MessagesList extends React.Component {
  render () {
    debugger
    const sortedMessages = this.props.messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )
    return sortedMessages.map(message => {
      let messageUsername = this.props.users[message.user_id].username
      return <li key={message.id}>
        <ul className='message-items'>
          <li><img id='avatar-img' src={window.userAvatar} alt=""/></li>
          <li><p id='message-username'>{messageUsername}</p></li>
          <li><Timestamp id='timestamp' time={message.created_at} format='time' /></li>
          <li><p id='message-body'>{message.body}</p></li>
        </ul>
      </li>
    })
  }
}

const mapStateToProps = (state) => {
  let room = state.ui.room
  let messages = []
  if (Object.keys(room).length) {
    messages = state.ui.room.messages
  }
  return {
    messages: messages,
    users: state.entities.users
  }
}

export default connect(mapStateToProps)(MessagesList)
