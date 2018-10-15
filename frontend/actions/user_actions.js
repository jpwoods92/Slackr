import * as UserAPIUtil from '../util/user_api_util'

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const UPDATE_USER = 'UPDATE_USER'

const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
}

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    user
  }
}

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users))
  )
}
