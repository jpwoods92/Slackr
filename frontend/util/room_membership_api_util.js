export const createMembership = (userIds, roomId) => {
  return $.ajax({
    method: 'POST',
    url: `api/room_memberships`,
    data: {room_membership: {user_ids: userIds, room_id: roomId}}
  })
}
