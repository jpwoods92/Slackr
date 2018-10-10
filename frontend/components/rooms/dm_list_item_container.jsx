import { connect } from 'react-redux'
import DMListItem from './dm_list_item'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    currentUserId: state.session.currentUserId
  }
}

export default connect(mapStateToProps)(DMListItem)
