import React from 'react'
import NewMessageForm from './new_message_form'

const MessagesArea = ({
  room: { id, title, messages }
}) => {
  return (
    <div className="messagesArea">
      <h2>{title}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm room_id={id} />
    </div>
  )
}

export default MessagesArea

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  )
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.body}</li>
  })
}
