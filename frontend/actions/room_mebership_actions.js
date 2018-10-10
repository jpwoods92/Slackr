import * as RoomMembershipApiUtil from '../util/room_membership_api_util'

export const NO_ACTION = 'NO_ACTION'

const noAction = () => {
  return {
    type: NO_ACTION
  }
}

export const createMembership = (payload) => dispatch => {
  return RoomMembershipApiUtil.createMembership(payload.userIds, payload.roomId).then(
    () => dispatch(noAction())
  )
}
