import { connect } from 'react-redux'
import { deleteMembership } from '../../actions/room_mebership_actions'
import { updateDMRoom, deleteRoom } from '../../actions/room_actions'
import DMListItem from './dm_list_item'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId]
  }
}

const mapDispatchToProps = dispatch => ({
  deleteMembership: (id) => dispatch(deleteMembership(id)),
  updateDMRoom: (room) => dispatch(updateDMRoom(room)),
  deleteRoom: (id) => dispatch(deleteRoom(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DMListItem)
