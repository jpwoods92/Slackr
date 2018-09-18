export const SELECT_ROOM = 'SELECT_ROOM'

export const selectRoom = (id) => dispatch => {
  return {
    type: SELECT_ROOM,
    id
  }
}

// ignore refesh issue until a later time
// render full messsage area
// select general on componentdidmount
