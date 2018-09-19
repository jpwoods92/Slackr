import { RECEIVE_ROOM } from '../actions/room_actions'

export default function (state = {}, action) {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ROOM:
      let newState = action.room
      return newState
    default:
      return state
  }
}
