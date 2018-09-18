import React from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../actions/room_actions'
import { withRouter } from 'react-router-dom'

class NewRoomForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '#',
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
    this.setState({title: '#'})
  }

  render () {
    return (
      <div className="newRoomsForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Create Channel" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createRoom: (room) => dispatch(createRoom(room))
})

export default withRouter(connect(null, mapDispatchToProps)(NewRoomForm))
