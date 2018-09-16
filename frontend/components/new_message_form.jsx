import React from 'react'

class NewMessageForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      body: '',
      room_id: this.props.room_id
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ room_id: nextProps.room_id })
  };

  handleChange (e) {
    this.setState({ body: e.target.value })
  };

  handleSubmit (e) {
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/messages',
      data: {message: this.state}
    })
    this.setState({ body: '' })
  };

  render () {
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
  };
}

export default NewMessageForm
