import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'
import { RECEIVE_ALL_USERS, UPDATE_USER } from '../../actions/user_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = Object.assign({}, state)
      newState[action.user.id] = action.user
      return newState
    case RECEIVE_ALL_USERS:
      return action.users
    case UPDATE_USER:
      newState = Object.assign({}, state)
      newState[action.user.id] = action.user
      return newState
    default:
      return state
  }
}
