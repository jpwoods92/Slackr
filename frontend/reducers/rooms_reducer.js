import { RECEIVE_ALL_ROOMS } from '../actions/room_actions'

export default function roomsReducer (state = [], action) {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_ROOMS:
      let newState = action.rooms
      return newState
    default:
      return state
  }
}
