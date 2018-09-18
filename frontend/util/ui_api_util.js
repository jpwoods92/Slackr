
export const fetchRoom = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/rooms/${id}`
  })
}
