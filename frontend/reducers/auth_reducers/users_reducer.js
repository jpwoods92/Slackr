import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = Object.assign({}, state)
      newState[action.user.id] = action.user
      return newState
    default:
      return state
  }
}
