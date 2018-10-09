import { connect } from 'react-redux'
import { deleteMembership } from '../../actions/room_mebership_actions'
import { updateRoom } from '../../actions/room_actions'
import RoomsListItem from './rooms_list_item'

const mapDispatchToProps = dispatch => ({
  deleteMembership: (id) => dispatch(deleteMembership(id)),
  updateRoom: (room) => dispatch(updateRoom(room))
})

export default connect(null, mapDispatchToProps)(RoomsListItem)
