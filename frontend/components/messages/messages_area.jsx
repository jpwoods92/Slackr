import React from 'react'
import NewMessageForm from './new_message_form_container'
import Timestamp from 'react-timestamp'
import MessageNav from './message_nav'
import { ActionCable } from 'react-actioncable-provider'
class MessagesArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
    this.myRef = React.createRef()
  }

  componentDidMount () {
    this.props.fetchUsers()
    let roomId = parseInt(this.props.history.location.pathname.split('/').pop()) || 1
    this.props.fetchMessages(roomId).then(this.props.fetchRoom(roomId))
      .then((this.setState({messages: this.props.messages})))
    this.props.history.push(`/channels/${roomId}`)
    if (this.props.room.title !== undefined) {
      this.myRef.current.scrollIntoView()
    }
  }

  componentDidUpdate () {
    if (this.props.room.title !== undefined) {
      this.myRef.current.scrollIntoView()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.messages !== nextProps.messages) {
      this.setState({messages: nextProps.messages})
      this.props.fetchUsers()
    }
  }

  handleReceivedMessage () {
    let roomId = parseInt(this.props.history.location.pathname.split('/').pop())
    this.props.fetchMessages(roomId)
    this.myRef.current.scrollIntoView()
  }

  render () {
    if (this.props.messages === undefined) return null
    let roomTitle = this.props.room.title
    let numUsers = Object.keys(this.props.users).length
    let messages = this.props.messages.map(message => {
      if (!this.props.users[message.user_id]) return null
      let messageUsername = this.props.users[message.user_id].username
      return <li className='message-list-item' key={message.id}>
        <img className='avatar-img' src={window.userAvatar} alt=""/>
        <div className='message-item-contents'>
          <div className='username-timestamps-container'>
            <div className='message-username'>{messageUsername}</div>
            <Timestamp className='timestamp' className='timestamp' time={message.created_at} format='time' />
          </div>
          <div className='message-body'>{message.body}</div>
        </div>
      </li>
    })
    return (
      <div className="messagesArea">
        <MessageNav roomTitle={roomTitle} numUsers={numUsers} />
        <div className='messages-container'>
          <ul className='message-list'>
            {messages}
            <div ref={this.myRef}></div>
          </ul>
          <ActionCable
            ref='RoomsChannel'
            channel={{ channel: 'RoomsChannel', room: this.props.room.id }}
            onReceived={this.handleReceivedMessage}
          />
          <NewMessageForm />
        </div>
      </div>
    )
  }
}

export default MessagesArea
