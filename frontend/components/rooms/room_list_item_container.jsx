import { connect } from 'react-redux'
import RoomListItem from './room_list_item'
import { fetchRoom } from '../../actions/room_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    currentUserId: state.session.currentUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoom: (id) => {
      dispatch(fetchRoom(id))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomListItem))
