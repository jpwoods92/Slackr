import React from 'react'
import NewMessageForm from './new_message_form_container'
import Cable from './cables_container'

class MessagesArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
  }

  componentDidMount () {
    debugger
    this.props.fetchRoom(this.props.match.params.roomId)
  }

  componentWillReceiveProps (nextProps) {
    debugger
    if (this.props.match.params.roomId !== nextProps.match.params.roomId) {
      this.props.fetchRoom(nextProps.match.params.roomId)
    }
  }

  handleReceivedMessage (response) {
    const { message } = response
    const messages = [...this.state.messages, message]
    this.setState({ messages })
  }

  render () {
    debugger
    if (!this.props.room) return null
    return (
      <div className="messagesArea">
        <h2>{this.props.room.title}</h2>
        <ul>{orderedMessages(this.state.props.messages)}</ul>
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
    return <li key={message.id}><ul></ul>{message.body}</li>
  })
}
