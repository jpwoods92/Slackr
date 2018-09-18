export const createMessage = (message) => {
  return $.ajax({
    method: 'GET',
    url: `/messages`,
    data: {message: { body: message.body,
      room_id: message.roomId}}
  })
}
