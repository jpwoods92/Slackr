export const fetchRooms = () => {
  return $.ajax({
    method: 'GET',
    url: '/rooms'
  })
}

export const createRoom = (room) => {
  return $.ajax({
    method: 'POST',
    url: '/rooms',
    data: {room}
  })
}

export const fetchRoom = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/rooms/${id}`
  })
}
