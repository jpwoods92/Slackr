import * as RoomAPIUtil from '../util/room_api_util'

export const REMOVE_ROOM = 'REMOVE_ROOM'
export const RECEIVE_ALL_ROOMS = 'RECEIVE_ALL_ROOMS'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const RECEIVE_ROOM = 'RECEIVE_ROOM'
export const SWITCH_ROOM = 'SWITCH_ROOM'
export const NO_ACTION = 'NO_ACTION'

const noAction = () => {
  return {
    type: NO_ACTION
  }
}

const receiveAllRooms = (rooms) => {
  return {
    type: RECEIVE_ALL_ROOMS,
    rooms
  }
}

export const receiveRoom = (room) => {
  return {
    type: RECEIVE_ROOM,
    room
  }
}

export const switchRoom = (room) => {
  return {
    type: SWITCH_ROOM,
    room
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const removeRoom = (id) => {
  return {
    type: REMOVE_ROOM,
    id
  }
}

export const fetchRooms = () => dispatch => {
  return RoomAPIUtil.fetchRooms().then(rooms => dispatch(receiveAllRooms(rooms)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const fetchRoom = (id) => dispatch => {
  return RoomAPIUtil.fetchRoom(id).then((room) => {
    return dispatch(switchRoom(room))
  })
}

export const updateDMRoom = (room) => dispatch => {
  return RoomAPIUtil.updateRoom(room).then(() => dispatch(noAction()))
}

export const updateRoom = (room) => dispatch => {
  return RoomAPIUtil.updateRoom(room).then((room) => {
    return dispatch(receiveRoom(room))
  })
}
