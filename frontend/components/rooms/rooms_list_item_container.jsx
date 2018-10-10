import { connect } from 'react-redux'
import { updateRoom } from '../../actions/room_actions'
import RoomsListItem from './rooms_list_item'

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId
  }
}

export default connect(mapStateToProps)(RoomsListItem)
