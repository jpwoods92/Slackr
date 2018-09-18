import { RECEIVE_ERRORS } from '../../actions/session_actions'

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_ERRORS:
      let newState = action.errors
      return newState
    default:
      return state
  }
}
