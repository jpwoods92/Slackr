import { connect } from 'react-redux'
import RoomListItem from './room_list_item'
import { fetchRoom, switchRoom } from '../../actions/room_actions'
import { withRouter } from 'react-router-dom'
import { updateUser } from '../../actions/user_actions'

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.currentUserId],
    currentUserId: state.session.currentUserId,
    mainRoom: state.entities.rooms[1]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchRoom: (id) => dispatch(fetchRoom(id)),
    switchRoom: (room) => dispatch(switchRoom(room))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomListItem))
