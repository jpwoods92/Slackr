import React from 'react'
import NewMessageForm from './new_message_form_container'
import Cable from './cables_container'
import Timestamp from 'react-timestamp'

class MessagesArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.messages !== nextProps.messages) {
      this.setState({messages: nextProps.messages})
    }
  }

  handleReceivedMessage (response) {
    const { message } = response
    const messages = [...this.state.messages, message]
    this.setState({ messages })
  }

  render () {
    if (!this.props.room) return null
    return (
      <div className="messagesArea">
        <h2>{this.props.room.title}</h2>
        <ul>{orderedMessages(this.state.messages)}</ul>
        <Cable handleReceivedMessage={this.handleReceivedMessage}/>
        <NewMessageForm />
      </div>
    )
  }
}

export default MessagesArea

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  )
  return sortedMessages.map(message => {
    return <li key={message.id}><ul>
      <li>{message.body}</li>
      <li>{message.username}</li>
      <li><Timestamp time={message.created_at} format='time' /></li>
      <li><img src={message.avatar} alt=""/></li>
    </ul></li>
  })
}
