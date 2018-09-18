import * as RoomAPIUtil from '../util/room_api_util'

export const RECEIVE_ALL_ROOMS = 'RECEIVE_ALL_ROOMS'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveAllRooms = (rooms) => {
  return {
    type: RECEIVE_ALL_ROOMS,
    rooms
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const fetchRooms = () => dispatch => (
  RoomAPIUtil.fetchRooms().then(rooms => dispatch(receiveAllRooms(rooms)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const createRoom = (room) => dispatch => (
  RoomAPIUtil.createRoom(room)
)
