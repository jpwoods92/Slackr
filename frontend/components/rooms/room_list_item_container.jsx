import { connect } from 'react-redux'
import RoomListItem from './room_list_item'
import { fetchRoom } from '../../actions/room_actions'
import { withRouter } from 'react-router-dom'
import { updateUser } from '../../actions/user_actions'
const mapStateToProps = (state) => {
  return {
    users: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.currentUserId],
    currentUserId: state.session.currentUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchRoom: (id) => dispatch(fetchRoom(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomListItem))
