export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: `/messages`,
    data: {message: { body: message.body,
      room_id: message.roomId}}
  })
}
