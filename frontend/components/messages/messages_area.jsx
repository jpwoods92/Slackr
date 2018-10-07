import React from 'react'
import NewMessageForm from './new_message_form_container'
import MessageNav from './message_nav'
import { ActionCable } from 'react-actioncable-provider'
import MessageListItem from './message_list_item'
class MessagesArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
    this.myRef = React.createRef()
    this.sortedMessages = this.sortedMessages.bind(this)
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

  sortedMessages (messages) {
    let dupedMessages = messages.slice()
    return dupedMessages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
  }

  render () {
    if (this.props.messages === undefined) return null
    let roomTitle = this.props.room.title
    let numUsers = Object.keys(this.props.users).length

    let messages = this.sortedMessages(this.props.messages).map(message => {
      return <MessageListItem key={message.id} message={message}/>
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
