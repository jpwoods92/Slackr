import * as RoomMembershipApiUtil from '../util/room_membership_api_util'

export const NO_ACTION = 'NO_ACTION'
export const REMOVE_ROOM = 'REMOVE_ROOM'

const noAction = () => {
  return {
    type: NO_ACTION
  }
}

const removeRoom = (id) => {
  return {
    type: REMOVE_ROOM,
    id
  }
}

export const createMembership = (payload) => dispatch => {
  return RoomMembershipApiUtil.createMembership(payload.userIds, payload.roomId).then(
    () => dispatch(noAction())
  )
}

export const deleteMembership = (id) => dispatch => {
  RoomMembershipApiUtil.deleteMembership(id).then(() => dispatch(removeRoom(id)))
}
