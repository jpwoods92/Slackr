import { connect } from 'react-redux'
import AddUserForm from './add_user_form'

const mapStateToProps = state => {
  let users = Object.values(state.entities.users).filter(el =>
    el.id !== state.session.currentUserId) || []
  let currentUser = state.entities.users[state.session.currentUserId]
  return {
    currentUser: currentUser,
    room: state.ui.room,
    users: users
  }
}

export default connect(mapStateToProps)(AddUserForm)
