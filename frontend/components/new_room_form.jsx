import React from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../actions/room_actions'

class NewRoomForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      is_private: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ title: e.target.value })
  };

  handleSubmit (e) {
    e.preventDefault()
    this.props.createRoom(this.state)
    this.setState({title: ''})
  }

  render () {
    return (
      <div className="newRoomsForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Rooms:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Create Room" />
        </form>
      </div>
    )
  };
}

const mapDispatchToProps = dispatch => ({
  createRoom: (room) => dispatch(createRoom(room))
})

export default connect(null, mapDispatchToProps)(NewRoomForm)
