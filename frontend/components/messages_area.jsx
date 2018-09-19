import React from 'react'
import NewMessageForm from './new_message_form_container'
import Cable from './cables_container'
import MessagesList from './messages_list'

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
        <ul className='message-list'>
          <MessagesList />
        </ul>
        <Cable handleReceivedMessage={this.handleReceivedMessage}/>
        <NewMessageForm />
      </div>
    )
  }
}

export default MessagesArea
