export const fetchMessages = (roomId) => {
  return $.ajax({
    method: 'GET',
    url: `/messages`,
    data: {room_id: roomId}
  })
}
