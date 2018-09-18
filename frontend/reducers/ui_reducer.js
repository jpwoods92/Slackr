import { RECEIVE_ROOM } from '../actions/ui_actions'

export default function (state = {}, action) {
  // debugger
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ROOM:
      let newState = action.room
      return newState
    default:
      return state
  }
}
