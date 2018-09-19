import React from 'react'
import NewMessageForm from './new_message_form_container'
import Cable from './cables_container'
import Timestamp from 'react-timestamp'
import MessageNav from './message_nav'

class MessagesArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
    this.myRef = React.createRef()
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
  }

  componentDidMount () {
    this.myRef.current.scrollIntoView()
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.messages !== nextProps.messages) {
      this.setState({messages: nextProps.messages})
      this.myRef.current.scrollIntoView()
    }
  }

  handleReceivedMessage (response) {
    const { message } = response
    const messages = [...this.state.messages, message]
    this.setState({ messages })
    this.myRef.current.scrollIntoView()
  }

  render () {
    if (!this.props.room) return null
    const orderedMessages = messages => {
      const sortedMessages = messages.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      )
      return sortedMessages.map(message => {
        let messageUsername = this.props.users[message.user_id].username
        return <li id='message-list-item' key={message.id}>
          <ul className='message-item-contents'>
            <li><img id='avatar-img' src={window.userAvatar} alt=""/></li>
            <li><p id='message-username'>{messageUsername}</p></li>
            <li><Timestamp id='timestamp' time={message.created_at} format='time' /></li>
            <li><p id='message-body'>{message.body}</p></li>
          </ul>
        </li>
      })
    }
    let roomTitle = this.props.room.title
    let numUsers = Object.keys(this.props.users).length
    return (
      <div className="messagesArea">
        <MessageNav roomTitle={roomTitle} numUsers={numUsers} />
        <Cable handleReceivedMessage={this.handleReceivedMessage}/>
        <div className='messages-container'>
          <ul className='message-list'>
            {orderedMessages(this.state.messages)}
            <div ref={this.myRef}></div>
          </ul>
          <NewMessageForm />
        </div>
      </div>
    )
  }
}

export default MessagesArea
