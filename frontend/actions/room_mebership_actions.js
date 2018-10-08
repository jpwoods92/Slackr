import * as RoomMembershipApiUtil from '../util/room_membership_api_util'

export const createMembership = (userIds) => {
  userIds.forEach(id => {
    return RoomMembershipApiUtil.createMembership(id)
  })
}

export const deleteMembership = (id) => (
  RoomMembershipApiUtil.deleteMembership(id)
)
