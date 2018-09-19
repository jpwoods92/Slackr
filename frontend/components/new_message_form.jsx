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
          <label>New Message:</label>
          <input
            type="text"
            value={this.state.body}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default NewMessageForm
