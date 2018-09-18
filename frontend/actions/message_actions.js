import * as MessageAPIUtil from '../util/message_api_util'

export const createMessage = (message) => dispatch => {
  return (
    MessageAPIUtil.createMessage(message))
}
