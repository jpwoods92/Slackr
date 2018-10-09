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
    if (this.props.room.id !== nextProps.room.id) {
      this.setState({messages: nextProps.messages})
      this.props.fetchUsers()
    } else if (this.props.room.member_ids) {
      if (this.props.room.member_ids.length !== nextProps.room.member_ids.length) {
        this.props.fetchRoom(1).then(() => this.props.history.push('/channels/1'))
        this.props.fetchMessages(1)
      }
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

    let messages = this.sortedMessages(this.props.messages).map(message => {
      return <MessageListItem key={message.id} message={message}/>
    })
    return (
      <div className="messagesArea">
        <MessageNav users={this.props.users} room={this.props.room} />
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
