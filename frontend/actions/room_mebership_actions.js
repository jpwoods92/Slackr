import * as RoomMembershipApiUtil from '../util/room_membership_api_util'

export const createMembership = (userId, roomId) => (
  RoomMembershipApiUtil.createMembership(userId, roomId)
)

export const deleteMembership = (id) => (
  RoomMembershipApiUtil.deleteMembership(id)
)
