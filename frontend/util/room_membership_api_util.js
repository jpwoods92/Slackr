export const createMembership = (userId) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `api/room_memberships`,
    data: {room_membership: {user_id: userId}}
  })
}

export const deleteMembership = (roomId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/room_memberships/${roomId}`
  })
}
