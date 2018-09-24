import * as RoomAPIUtil from '../util/room_api_util'

export const RECEIVE_ALL_ROOMS = 'RECEIVE_ALL_ROOMS'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const RECEIVE_ROOM = 'RECEIVE_ROOM'

const receiveAllRooms = (rooms) => {
  return {
    type: RECEIVE_ALL_ROOMS,
    rooms
  }
}

const receiveRoom = (room) => {
  return {
    type: RECEIVE_ROOM,
    room
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

export const fetchRoom = (id) => dispatch => {
  return RoomAPIUtil.fetchRoom(id).then((room) => {
    return dispatch(receiveRoom(room))
  })
}

export const createRoom = (room) => dispatch => (
  RoomAPIUtil.createRoom(room)
)
