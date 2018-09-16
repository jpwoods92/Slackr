export const fetchRooms = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/rooms'
  })
}

export const createRoom = (room) => {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/rooms',
    data: {room}
  })
}
