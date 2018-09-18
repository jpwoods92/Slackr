import * as UiAPIUtil from '../util/ui_api_util'

export const RECEIVE_ROOM = 'RECEIVE_ROOM'

const receiveRoom = (room) => {
  // debugger
  return {
    type: RECEIVE_ROOM,
    room
  }
}

export const fetchRoom = (id) => dispatch => (
  UiAPIUtil.fetchRoom(id).then(({room}) => {
    return dispatch(receiveRoom(room))
  })
)
