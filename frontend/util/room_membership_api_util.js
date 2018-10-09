export const createMembership = (userIds, roomId) => {
  return $.ajax({
    method: 'POST',
    url: `api/room_memberships`,
    data: {room_membership: {user_ids: userIds, room_id: roomId}}
  })
}

export const deleteMembership = (roomId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/room_memberships/${roomId}`
  })
}
