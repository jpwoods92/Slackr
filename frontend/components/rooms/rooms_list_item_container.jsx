import { connect } from 'react-redux'
import { deleteMembership } from '../../actions/room_mebership_actions'
import { updateRoom } from '../../actions/room_actions'
import RoomsListItem from './rooms_list_item'

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId
  }
}

const mapDispatchToProps = dispatch => ({
  deleteMembership: (id) => dispatch(deleteMembership(id)),
  updateRoom: (room) => dispatch(updateRoom(room))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsListItem)
