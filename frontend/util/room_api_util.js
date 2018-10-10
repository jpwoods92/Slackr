export const fetchRooms = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/rooms'
  })
}

export const updateRoom = (room) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/rooms/${room.id}`,
    data: {room}
  })
}

export const fetchRoom = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/rooms/${id}`
  })
}
