import React from 'react'

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
    this.setState({ body: e.target.value })
  }

  handleSubmit (e) {
    let roomId = this.props.roomId
    e.preventDefault()
    this.props.createMessage({body: this.state.body, roomId: roomId})
    this.setState({ body: '' })
  }

  render () {
    if (!this.props.roomId) return null
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.body}
            placeholder={`Message #${this.props.room.title}`}
            onChange={(e) => this.handleChange(e)}
            id='message-input'
          />
        </form>
      </div>
    )
  }
}

export default NewMessageForm
