export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: `/messages`,
    data: {message: { body: message.body,
      room_id: message.roomId}}
  })
}

export const fetchMessages = (roomId) => {
  return $.ajax({
    method: 'GET',
    url: `api/messages`,
    data: {room_id: roomId}
  })
}
