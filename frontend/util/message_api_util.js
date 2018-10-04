
export const fetchMessages = (roomId) => {
  return $.ajax({
    method: 'GET',
    url: `api/messages`,
    data: {room_id: roomId}
  })
}
