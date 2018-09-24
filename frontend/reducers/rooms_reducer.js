import { RECEIVE_ALL_ROOMS, RECEIVE_ROOM } from '../actions/room_actions'

export default function roomsReducer (state = [], action) {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_ROOMS:
      let newState = action.rooms
      return newState
    case RECEIVE_ROOM:
      newState = state.slice()
      newState.push(action.room)
      return newState
    default:
      return state
  }
}
