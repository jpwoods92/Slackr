export const createMembership = (userId, roomId) => {
  return $.ajax({
    method: 'POST',
    url: `api/room_memberships`,
    data: {user_id: userId, room_id: roomId}
  })
}

export const deleteMembership = (roomId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/room_memberships/${roomId}`
  })
}
