import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRoom } from '../actions/room_actions'

class roomsListItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (id) {
    this.props.fetchRoom(id)
  }

  render () {
    let classText
    if (this.props.room.id === this.props.currentRoom.id) {
      classText = 'room-list-link active'
    } else {
      classText = 'room-list-link'
    }
    return (
      <li key={this.props.room.id} className="room-list-item" onClick={() => this.handleClick(this.props.room.id)}>
        <Link className={classText} to={`/channels/${this.props.room.id}`}># {this.props.room.title}</Link>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentRoom: state.ui.room
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoom: (id) => dispatch(fetchRoom(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(roomsListItem)
