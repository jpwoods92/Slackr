import React from 'react'
import { ActionCable } from 'react-actioncable-provider'

class NewMessageForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      body: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ body: e.target.innerText })
    if (e.keyCode === 13) {
      e.preventDefault()
      e.stopPropagation()
      this.handleSubmit(e)
    }
  }

  handleSubmit (e) {
    let roomId = this.props.roomId
    let user = this.props.user
    e.preventDefault()
    this.refs.RoomsChannel.perform('speak', {body: e.target.innerText, room_id: roomId, user_id: user})
    e.target.innerText = ''
    this.setState({body: ''})
  }

  render () {
    if (!this.props.roomId) return null
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <ActionCable
            ref='RoomsChannel'
            channel={{ channel: 'RoomsChannel', room: this.props.roomId }}
          />
          <div
            contentEditable="true"
            role="textbox"
            tabIndex="1"
            aria-multiline="true"
            aria-autocomplete="list"
            aria-expanded="false"
            aria-owns="chat_input_tab_ui"
            spellCheck="true"
            autoCorrect="off"
            autoComplete="off"
            type="text"
            value={this.state.body}
            data-text={`Message #${this.props.room.title}`}
            onKeyDown={(e) => this.handleChange(e)}
            className='message-input'
          />
        </form>
      </div>
    )
  }
}

export default NewMessageForm
